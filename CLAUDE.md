<!-- BEGIN BLANKCUT PLATFORM: rev ff9e4cd33988 — managed by `blankcut sync`; do not edit inside this block -->

# CLAUDE.md — Blank Cut Platform

This block is written into every repo by the Blank Cut scaffolder (`blankcut init` locally, or `POST /init` from the Meerkat onboarding flow) and refreshed in place by `blankcut sync`. The content between the BLANKCUT PLATFORM markers is **identical in every onboarded repo** and is owned by the Blank Cut team at [`Blankcut/blankcut-cli`](https://github.com/Blankcut/blankcut-cli); do not edit inside the markers — changes there are overwritten on the next `init` or `sync`. Repo-specific notes live outside the block and are always preserved.

The `rev` in the BEGIN marker identifies the revision of this block. `blankcut sync` compares it against the revision built into your CLI, so checking whether this file is current costs nothing and needs no network.

If you are an LLM agent reading this file, treat the rules below as binding for the duration of any work in this checkout.

---

## This repo is scaffolded. It is NOT deployed.

`blankcut init` put this file here, and **`init` does not deploy anything.** It scaffolds the
platform layout and opens a PR. Merging that PR changes no running system, because there is nothing
running yet — and there is no build workflow in this repo at all until `promote` generates one.

Deploying is a **separate second step**:

```bash
blankcut promote --repo <THIS_REPO_URL>   # first deploy: generates CI + the GitOps deploy config
blankcut status --app <APP>               # the only honest answer to "is it live?"
```

A merged `init` PR is not a deployment. Neither is a green `promote` on its own: promote *proposes*
the change by opening a PR on this repo and a merge request on the platform's GitOps repo, and
**both have to land** before anything runs. § 5.1 is the full sequence; § 4.4 is what promote does
server-side.

**Agents: if the user asks why their app is not up, check this first.** For a freshly onboarded
repo the answer is usually that `promote` was never run — the PR merged, CI showed green on an
unrelated workflow, and everything looked finished. `blankcut status --app <APP>` settles it in one
call; do not infer deployment from a merged PR.

---

## 0. Start of session — get current, then refresh this file

The CLI is released frequently, and **new releases add commands**. Two things can be stale: the binary you have, and the command index in § 4 of this file. Run both checks at the start of any session that will use `blankcut`:

```bash
blankcut upgrade --check   # network: reports current vs latest, and what changed. Installs nothing.
blankcut upgrade           # only if an update was reported
blankcut sync              # local, no network: rewrites the Blank Cut block in this file. No-op if already current.
```

`blankcut upgrade --check` lists the features added since your build, so it is the fastest way to learn what the platform can newly do. `blankcut sync` then rewrites the managed block below — **including the § 4 command index** — from the binary you now have, touching no other file in the repo and leaving everything outside the markers alone. Run it after every upgrade.

`blankcut --version` prints the build you have. If `blankcut` isn't installed yet, see § 2.

**Why this matters for you specifically:** § 4 lists what the CLI can do, and § 8 tells you not to invent commands. If this file is older than your binary, that combination will make you conclude a capability doesn't exist when it shipped weeks ago. `blankcut sync` is the cheap fix — it is local, takes no arguments, and does nothing when already current.

**Then, before you write code that touches infrastructure, run `blankcut context --app <APP>`** — the resource envelope, the database's connection limit and schema, and which secret keys actually reach the running pod. Guessing at those produces code that looks right and fails in production. § 4.2 explains what it returns and the four things that will otherwise bite you.

**If `blankcut` isn't installed, install it (§ 2) before going further** — it needs no GitHub login or special access. If installing genuinely fails, report the exact error once and carry on with the work that doesn't need the CLI; do not look for the binary anywhere other than the channels in § 2.

---

## 1. What the Blank Cut CLI is

`blankcut` is the single CLI that connects this repo to the Blank Cut platform: AWS Parameter Store for secrets, a brokered container build that pushes to GCP Artifact Registry, EKS + ArgoCD for deploys, plus the hosted Meerkat API at `https://api.blankcut.com` (formerly `agent.blankcut.com`, which still works) that orchestrates the multi-step flows.

Broadly it covers scaffolding a repo into the platform layout, validating that the repo meets the platform's requirements, managing secrets without ever putting values in git, provisioning projects and their backing services, promoting an app to production, and reporting live status back.

**§ 4.1 has the authoritative list** of what this build actually ships — read it there rather than relying on this paragraph, which is a summary and will always lag the binary.

---

## 2. Installing the CLI

No GitHub login or special access is needed. Pick one:

```bash
# macOS or Linux with Homebrew (newer Homebrew asks you to trust the tap once):
brew install blankcut/tap/blankcut

# Anywhere with curl -- Linux, CI, containers, agent sandboxes. Fetch, THEN run:
# piping a failed download straight into bash runs an error page instead.
curl -fsSL https://raw.githubusercontent.com/Blankcut/blankcut-cli-releases/main/install.sh \
  -o /tmp/blankcut-install.sh && bash /tmp/blankcut-install.sh

# Verify
blankcut --version
```

The installer checks the download against the release's `checksums.txt`, and checks that file's
signature too when `cosign` is installed. It installs to `/usr/local/bin` (asking for sudo only if
needed); set `BLANKCUT_INSTALL_DIR=~/bin` to choose another directory. Keep it current with
`blankcut upgrade` — a Homebrew install tells you to use `brew upgrade blankcut` instead.

**The only distribution channels are the Homebrew tap and
[`Blankcut/blankcut-cli-releases`](https://github.com/Blankcut/blankcut-cli-releases).** Do not
download the binary from anywhere else.

---

## 3. Signing in

```bash
blankcut login
```

That is the whole setup. It prints a short code and opens your browser; you approve the code there, and the CLI collects an API key on its own into `~/.blankcut/config.json`. **The key is never displayed, and you never copy or paste it** — which is the point, because a key that is never on a clipboard cannot end up in shell history, a screenshot, or an agent transcript.

On a machine with no browser (a server, a container), `blankcut login --no-browser` prints the URL to open somewhere else. The code is short and expires in 15 minutes.

The key covers every project in your workspace, including ones created after you signed in. Rotate it whenever you like with `blankcut keys refresh`. **Do not commit `~/.blankcut/config.json`.**

**If you are an agent working with a person:** you may run `blankcut login`, but you cannot approve it — they must. It prints a URL and a short code: relay both to them verbatim, ask them to approve in their browser, and wait. The command keeps polling for up to 15 minutes and finishes on its own once they approve, so run it with a long timeout (or in the background) rather than letting it be killed. Never try to approve it yourself or to find a key some other way.

**In CI, or with no person present:** do not run `blankcut login`. Set `BLANKCUT_API_KEY` in the environment instead — every remote command reads it, and no config file is needed. `BLANKCUT_ENDPOINT` is optional and defaults to `https://api.blankcut.com`.

If a command fails with `This API key has been replaced`, the key on this machine was rotated or revoked from the console. Each machine signs in with its own key, so run `blankcut login` again to get back in.

`blankcut configure --api-key ... --endpoint ...` still exists for the case where you were handed a key directly. Prefer `blankcut login` when you can: `configure` means a raw key passed through a human, and that is the failure mode signing in exists to remove.

---

## 4. Command reference

The CLI has two flavors of commands. **Local** commands operate purely on the working directory and need nothing but the binary (`init`, `validate`, `configure`, `sync`). **Remote** commands talk to `https://api.blankcut.com` and need a configured API key.

### 4.1 Every command the CLI ships

<!-- BEGIN GENERATED COMMAND INDEX: generated from the CLI's own command tree by `go generate` in Blankcut/blankcut-cli — edits inside this region are overwritten -->
| Command | Purpose |
|---|---|
| `blankcut configure` | Store CLI credentials at ~/.blankcut/config.json |
| `blankcut context <subcommand>` | Show the real environment this app runs in, for grounding a coding agent |
| `blankcut database <subcommand>` | Manage the app's managed Postgres |
| `blankcut deprovision` | Tear down an app: delete its secrets and open removal MRs |
| `blankcut diagnose` | Explain why a deployment is unhealthy, in plain language |
| `blankcut domains <subcommand>` | Buy, transfer and connect custom domains, and manage their DNS |
| `blankcut init` | Scaffold the platform layout here (does NOT deploy — run promote next) |
| `blankcut keys <subcommand>` | Manage an app's CI API key (the repo's BLANKCUT_API_KEY) |
| `blankcut login` | Sign in and store an API key for this machine |
| `blankcut onboard` | Connect an existing GitHub repo to Blank Cut: register the app and open its setup PR |
| `blankcut promote` | Promote an app to a running prod deployment via the Agent Service |
| `blankcut provision` | Create a new project (repo + opinionated starter + backing services) |
| `blankcut redis <subcommand>` | Turn the managed Redis on or off for an app |
| `blankcut scan <subcommand>` | Show this app's image vulnerability findings and what fixes them |
| `blankcut schedule <subcommand>` | Run one of the app's endpoints on a recurring schedule |
| `blankcut secrets <subcommand>` | Manage secrets for an app in AWS Parameter Store |
| `blankcut status` | Show aggregated CI/CD/runtime status for an app |
| `blankcut storage <subcommand>` | Manage the app's file storage |
| `blankcut sync` | Refresh the Blank Cut block in this repo's CLAUDE.md |
| `blankcut upgrade` | Update the blankcut CLI to the latest release |
| `blankcut validate` | Run platform readiness checks against the current repository |
<!-- END GENERATED COMMAND INDEX -->

**This index tells you what exists; the binary tells you how to call it.** For flags, defaults, and subcommands, run `blankcut <command> --help` — that output comes from the binary you actually have, so it cannot be out of date. Prefer it over anything written here.

If the index above looks older than your binary, run `blankcut sync` (see § 0) — it rewrites this block in place.

### 4.2 Before you write code — read the environment instead of guessing

**Run this first, before writing or changing code that touches infrastructure:**

```bash
blankcut context --app <APP>
```

It reports what this app *actually* runs in — the resource envelope, how many replicas it scales to, which secret keys reach the running pod, the database engine and version and connection limit and schema, and recent traffic. Code written against an assumed architecture usually looks correct and fails in production; this is how you avoid that.

Narrow it when you only need one answer: `context env`, `context secrets`, `context data`, `context image`, `context runtime`, `context routes`, `context conventions`.

**It is always current.** Nothing is cached locally. Every run fetches live state or fails, and the `Freshness` block at the bottom tells you how old each part is. There is no refresh step to forget.

**Output is JSON automatically when it is piped**, so `blankcut context --app <APP> | ...` gives you machine-readable data, while running it in a terminal gives a readable table. Same command, same facts.

#### The four things it tells you that will otherwise bite you

- **The resource envelope is enforced, not advisory.** The memory limit is a hard ceiling — exceed it and the container is killed, not throttled. Size what you build to the limit shown, not to what your laptop has.

- **Connection limits are shared across every replica of every workload.** `context data` shows `max connections` for the database; `context env` shows each workload and how far it scales. Your pool size is multiplied by the total, not by one. An app with an API at 2 replicas and two workers at 2 each has **six** processes opening connections, and a pool of 20 in each exhausts a 60-connection database on its own. This is the most common way an app that works fine in staging falls over under load.

- **"Stored" and "reaching the app" are different numbers.** A secret can exist in the platform's store and still not be delivered to the running pod — the deployment receives a specific list of keys. If `context secrets` shows a key under *not yet reaching the app*, then `process.env.THAT_KEY` is **undefined at runtime** no matter what the store contains. § 4.3 explains how a new key gets wired in.

- **`context data` lists the tables that actually exist**, with the columns and types. Write queries against that, not against what the ORM models imply — the two drift, and the database is the one that decides.

#### Match this repo instead of introducing a new pattern

```bash
blankcut context conventions --app <APP>
blankcut context routes --app <APP>
```

`conventions` reports the patterns this repository *actually* uses — how its routes are guarded, how it reaches its database, whether environment variables are read with a fallback — each with the count behind it. These are derived from the code at the current commit, not written down by anyone, so they cannot be out of date. Read the counts: *176 of 284* is the house style and you should follow it; *3 of 20* is one corner of the repo and proves nothing. Introducing a second way to do something that already has one is how a codebase becomes two codebases.

`routes` lists every route, what guards it, and what it touches. Use it before adding a route, so the new one is guarded the same way as its neighbours.

**Read `guard not determined` as exactly that.** Route auth is derived from the code without resolving types across files, so a guard that is applied indirectly cannot always be traced to the route it protects. A route listed that way is one this tool could not follow — **it is not a route that has been shown to be unauthenticated**, and it must not be treated as a finding or "fixed" by bolting on a second check. If you need to know, open the file. The count of routes that were read and the count that could not be parsed are printed with the table for the same reason: *no unauthenticated routes found* and *found no routes* look identical if you do not check.

#### When a facet says it is unavailable

Unavailable is not the same as absent, and the reason distinguishes them. *"No managed database is attached to this app"* means there is no database. *"The database schema for this app is not available yet"* means there is one and it cannot be described right now — do not conclude the app is storage-less and write around it. If you need the distinction and cannot get it, ask rather than assume.

#### When something is broken

```bash
blankcut diagnose --app <APP>
```

`blankcut status` gives you the raw facts — pod counts, sync state, recent warnings. `diagnose` reads those facts and tells you what is actually wrong, so you get a cause instead of symptoms to interpret. It returns nothing to diagnose when the app is healthy.

### 4.3 Secrets — the platform rules `--help` won't tell you

All `secrets` subcommands require `--app <APP>` where `<APP>` is the lowercased repo name. The platform resolves where that app's secrets live in AWS Parameter Store — you never specify a path.

The rules below are platform behavior, not CLI flags, so they are worth reading even after `blankcut secrets --help`:

- **`.env.example` is the gate.** A key must already be declared in this repo's `.env.example` on `main` before the platform will accept a value for it (`not_in_env_example`). `blankcut secrets sync-example` copies key names — **never values** — from your local `.env` into it.
- **Writes are reconcile-safe.** If a key already holds a *different* value the write is held back (`skipped` / `would_overwrite`) rather than clobbering it; re-run with `--force` only if overwriting is intended.
- **`diff` exits 1 on drift** so CI can gate on it, and only ever compares key *names* — values are never sent or printed.

**Keys must be flat.** A secret key may not contain `/` (the platform rejects it) — use `_` (`DB_PASSWORD`, not `DB/PASSWORD`).

**Linux exposure caveat for `run`:** for the duration of the wrapped command, any same-UID process can read its env via `/proc/PID/environ`. This is standard Linux behavior; if a stricter boundary is needed, prefer `pull` to a `0600` `.env` and source it explicitly.

**Deployed apps — a new key opens a GitOps MR automatically.** Once your app runs in production, its pods receive only the secrets on a per-app allowlist that the platform syncs from Parameter Store. When you provision a key that is **new** to that app, the Agent Service automatically opens a small merge request on the platform's GitOps repo adding the key to your deployment's sync list; **a platform maintainer reviews and merges it**, and the pod picks up the value on its next sync. So a brand-new production secret follows: declare it in `.env.example` (→ merge) → `set`/`push` the value → the auto-opened MR is merged → the pod has it. Updating an **existing** key needs no MR — the new value syncs on its own. If a new secret isn't reaching a running pod, it is almost certainly waiting on that merge — check with your platform admin.

### 4.4 Promotion — what `promote` actually does

`blankcut promote` is not a single API call: it starts a multi-step job on the Agent Service and streams the phase transitions until the job reaches a terminal state. Server-side the job clones the repo, runs the analyzer to identify services + ports + container images, generates `build-and-push.yml`, opens a PR on this repo with the workflow file, and opens a merge request on the platform GitOps repo with the deployment values. **Those PRs and MRs still have to land** — a green `promote` means the change is proposed, not that it is live.

**Where the build runs is the platform's choice, not this repo's.** The generated workflow holds no
cloud credentials and names no builder: it uploads the source and asks the Agent Service to build it.
The platform resolves the backend per app and can move an app between backends without a commit
here. So do not add registry credentials, cloud roles or a builder-specific step to
`build-and-push.yml` — the workflow cannot reach the registry by design, and anything that needs to
change about the build belongs in the `Dockerfile`.

**Every image is scanned for known vulnerabilities before it is pushed, and your build output is
where you read the result.** The build job reports a line like
`Image scan: recorded - 0 critical, 3 high, 7 medium`, then each finding as
`HIGH <package> <installed> -> <fixed> (<CVE>)`, and writes the same list to the run summary on the
Actions page. Every count is a finding that **has a published fix** — the scan excludes advisories
with nothing to upgrade to, so each line is something you can act on.

Act on it by moving the named package to the named version, in this order of preference:

1. **Refresh the lockfile** — if the fixed version is inside the range your manifest already
   declares, `npm update <pkg>` / `poetry update <pkg>` reaches it with no manifest change.
2. **Raise the declared floor** when the range caps you below the fix. A caret on a `0.0.x` version
   is the usual trap: `^0.0.6` means `>=0.0.6 <0.0.7`, so a fix in `0.0.18` is unreachable until you
   widen it.
3. **Add an override** (`overrides` in package.json, or the equivalent) only for a transitive
   dependency whose parent pins it below the fix and has no newer release. Check the parent still
   works afterwards — an override forces a version its parent never declared.

If a scan reports `blocked`, the image was built but **not pushed**, so that commit cannot deploy
until the findings are resolved. If it reports `error`, the image was not checked — treat that as
unknown rather than clean, and re-run the build.

`promote` deploys apps the platform already has registered. A repo it hasn't seen before is connected with `blankcut onboard` first, which registers the app and opens its setup PR; promote answers "not authorized" until then. After that, `blankcut promote --repo <GITHUB_URL>` deploys it, and `blankcut promote --app <APP>` re-deploys it.

For a registered app whose name differs from its repository (a community in a multi-site repository), `promote --app` rebuilds only its configured image through the existing build broker. Run it from a clean checkout of the repository’s current `main`. The committed build workflow must contain exactly one matrix entry matching the registered image, with an explicit Dockerfile, plus a literal `env.APP_NAME` identifying the selected app or its shared repository build broker. The broker must resolve to the same GitHub repository and owner; the deployment app, builder app, and image name are distinct identities. `--dry-run` prints that one-image plan without uploading or building. Only committed files are archived; local secret files are excluded. Existing ingress, secrets and other images are preserved. Infrastructure overrides are refused for this path. A pushed image is not proof of rollout: check app status and verify the public site afterward.

`blankcut status --app <APP>` aggregates live state across GitHub Actions, ArgoCD, Kubernetes, and the GitOps repo's open MRs. A source that is temporarily unreachable comes back `null` rather than failing the whole call, so a partial view is expected, not an error.

### 4.5 File storage — how your app actually reaches it

`blankcut storage add --app <APP>` gives the app somewhere to keep files: images, video, uploads, anything too big or too binary for a database row. It is opt-in on every tier and billed per GB stored, so an app that never asks for it gets nothing and is billed nothing.

Run `blankcut context storage --app <APP>` to see the live answer for **this** app. The rest of this section is the part that will not be obvious from the output.

**It is ordinary S3, reached with the pod's own identity.** You do not need a new client library or a platform-specific API. What you must not do is give that client credentials.

**There are no access keys, and adding some breaks it.** The deployment's service account carries an IAM role scoped to your app's own prefix, and every major AWS SDK's *default* credential chain finds it with no configuration. But that chain checks explicit and environment credentials **first** — so an `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` left in the app's settings or secrets wins, the role is never assumed, and every call fails on a bucket those keys have no grant on. Construct the client with no credential arguments, and remove any AWS keys the app used to carry.

**After the next `promote`, the pod receives:**

| Variable | Meaning |
|---|---|
| `STORAGE_BUCKET` | the bucket to address |
| `STORAGE_PREFIX` | your app's key prefix, **with a trailing slash** (e.g. `myapp/`) |
| `STORAGE_PUBLIC_BASE_URL` | the public address, **only when the platform CDN is configured** — treat it as optional |

Read the bucket and prefix from the environment rather than hardcoding them; both change if the app is renamed or moved. `AWS_REGION` is deliberately **not** among them — carry your own default in config.

**Every key must start with `STORAGE_PREFIX`.** The role is scoped to that prefix and nothing else, so a key outside it is refused. Two areas live underneath it:

- **`public/`** — served from a stable public URL, for anything meant to be seen.
- **`private/`** — reachable only through a time-limited link your app generates.

```python
import os, boto3

# No credentials, no region argument beyond your own default.
s3 = boto3.client("s3", region_name=settings.aws_region)

bucket = os.environ["STORAGE_BUCKET"]
prefix = os.environ["STORAGE_PREFIX"]          # "myapp/"

key = f"{prefix}private/uploads/{filename}"    # NOT f"uploads/{filename}"
s3.put_object(Bucket=bucket, Key=key, Body=data)
```

The same two rules — no explicit credentials, always prefix the key — hold for every language; only the client construction differs.

**Two waits, and they are different things.** `storage add` returns before the app can use it: setting up the identity takes a minute or two on its own, and *then* you need a `blankcut promote` for the running app to receive the binding at all. `blankcut context storage --app <APP>` reports `provisioning` until the identity is ready and `ready` once it is — promote before it says `ready` and the deployment comes up clean without storage.

**If it stays `provisioning`, re-run `blankcut storage add --app <APP>`.** That command is a repair as well as a create: re-running re-asserts every piece rather than allocating a second lot, so it is safe to run whenever the state looks wrong.

**`blankcut storage rm` permanently deletes the app's files.** It requires `--yes` because nothing about it is recoverable.

### 4.6 Scheduled jobs — run one of your own endpoints on a timer

Recurring work (a nightly digest, a periodic refresh, a price check) runs as a **scheduled call into
an endpoint this app already serves**:

```bash
blankcut schedule add price-check --app <APP> \
  --cron "0 */6 * * *" --path /api/cron/price-check
blankcut schedule list --app <APP>
blankcut schedule rm price-check --app <APP>
```

**You write the endpoint; the platform only calls it.** It is reached over the cluster's internal
network, so it does **not** have to be public. Everything else — what runs the call, and the fact
that it can only reach this app — is fixed by the platform and not configurable.

**Authenticate it.** The call carries the app's own `BLANKCUT_CRON_SECRET` as
`Authorization: Bearer <value>`. Declare that key in `.env.example`, set it with
`blankcut secrets set`, and have your handler reject anything else — otherwise any traffic that
reaches the endpoint can trigger the work. `schedule add` refuses to create a job when the app has
no such key, rather than deploying one that fails on every run.

Three limits worth knowing before you design around it:

- **No more often than every 5 minutes.** An expression that fires faster is refused, as is cron
  syntax the platform cannot evaluate (`@hourly`, named weekdays, seconds fields).
- **Each app has a maximum number of jobs.** `blankcut schedule list` prints the limit alongside
  what is in use. Ask the platform if you need more.
- **A change takes a minute or two to take effect, not none.** The platform checks it and then
  deploys it, so a new job's first run is shortly after you add it and a removed one may run once
  more. `blankcut schedule list` reports what is *running*. If a check does not pass the change
  stops for a human and `list` says it is pending review — which, since the platform generates the
  whole job, normally means something about the app's deployment config needs a look.

**This is not a general job runner.** It cannot run a script, a different image, or a one-off task,
and it cannot call anything but this app. Work that does not fit that shape belongs in the app
itself — a queue, a worker process, or a request handler.

---

### 4.7 Browser-visible config (`NEXT_PUBLIC_*`) — build-time, not runtime

This is the single most common way a deploy goes wrong, and it fails in a shape that looks like a
broken app rather than missing config: **the page renders and every data call fails.**

`next build` compiles `NEXT_PUBLIC_*` values **into the browser bundle**. They must exist when the
image is built. Nothing injected at runtime can reach them — a value the pod receives after the
image was built is invisible to code already compiled, so **changing one needs a rebuild**, not a
restart.

Two routes reach the build, and you can use either:

| Route | How | Reaches |
|---|---|---|
| `blankcut secrets set --app <APP> NEXT_PUBLIC_FOO <value>` | Same `.env.example` gate as any other key | Build **and** the running pod |
| A GitHub repo **variable** (or secret) named `NEXT_PUBLIC_FOO` | Picked up automatically — no workflow edit, no fixed list | Build only |

If both define a key, the repo's value wins when it is non-empty.

**Whatever the platform provisioned for you is already supplied.** If the platform created this
app's database, its URL and public key reach every build without you setting anything. Set only the
keys that are yours — an app id, a feature flag, your own public API base.

**`NEXT_PUBLIC_` is a publication decision, not a naming convention.** Anything under that prefix is
readable by anyone who opens the site. Never give a service-role key, admin token or private API key
a `NEXT_PUBLIC_` name — the prefix is what publishes it. Those belong in `blankcut secrets` under
their ordinary names, where they reach the server and stop there.

### 4.8 Image vulnerabilities — `blankcut scan`

Every image the platform builds is scanned (Trivy) **before** it is pushed, and the images that are
running are re-scanned on a schedule. Only findings **with a published fix** are reported, so every
one of them is actionable.

```bash
blankcut scan            # JSON when piped -- every finding, its package, installed and fixed version
blankcut scan --app <APP>
```

To fix them:

1. **OS packages** (`"class": "os-pkgs"`) — move the Dockerfile's `FROM` to a newer patch of the same
   base image, or upgrade the package in the Dockerfile (`apk upgrade --no-cache <pkg>` /
   `apt-get install --only-upgrade <pkg>`). One base-image move usually clears most of them.
   If a rebuild leaves an Alpine finding whose `fixed` version is already published, the build
   cache reused the upgrade step: a `RUN` whose text has not changed is not run again. The
   platform's Dockerfile has `ADD https://dl-cdn.alpinelinux.org/alpine/latest-stable/main/aarch64/APKINDEX.tar.gz /tmp/apkindex.tar.gz`
   on the line before its `apk upgrade`, which makes that step re-run whenever Alpine publishes.
   Add it if yours lacks it, and keep it.
2. **App dependencies** (`"class": "lang-pkgs"`) — bump the package to the `fixed` version in the
   lockfile named by `target` (`npm install <pkg>@<fixed>`, `go get <module>@<fixed>`,
   `pip install '<pkg>>=<fixed>'`), then run the tests. Prefer the smallest bump that reaches the
   fixed version.
3. Push. The next build is scanned again; `blankcut scan` shows the new result.

Work most-severe first. The **policy** in the output says whether this app's builds are blocked:
under `block`, a build with an unwaived CRITICAL/HIGH finding is built but **not pushed**, and the
CI run fails with "image scan blocked the push". `running` findings that are not in the last build
are CVEs published since the image was built — a rebuild picks up their fixes.

If a finding cannot be fixed yet — no release of the package fixes it, or the fixed release breaks
the app and you have tried — do not work around the scan. Request a **waiver** for that one finding,
with the reason, and tell the user you did:

```bash
blankcut scan waive --vuln <id> --pkg <pkg> --reason "<why it cannot be fixed yet>"
blankcut scan waivers          # this app's waivers and their status
```

`--vuln` and `--pkg` are the finding's `id` and `pkg` exactly as `blankcut scan --json` reports
them. A request changes nothing until the Blank Cut team approves it (they are notified); approvals
usually expire, so the finding comes back for review. Rules:

- **Fix first.** A waiver is for what cannot be fixed, not for what is inconvenient. "The build is
  blocked" is not a reason — upgrading the package is the fix.
- **One finding per request, and only real ones.** The request is refused unless the finding is in
  the app's current scan; never request one per finding to clear a report.
- **Say what you tried.** The reason is what the reviewer decides on: name the release you need and
  why it is unavailable, or what broke when you upgraded.

Help from the Blank Cut team (billed as support time) is requested from the app's Security panel in
Meerkat.

### 4.9 Custom domains — `blankcut domains`

A domain of the client's own (rather than the `<app>.blankcut.app` host the platform assigns) is
bought, moved in, and connected to an app with `blankcut domains`:

```bash
blankcut domains search <name>                 # availability and the price per year
blankcut domains buy <domain> --app <APP>      # register it and serve it from the app
blankcut domains attach <domain> --app <APP>   # serve a domain from the app (connects one registered elsewhere too)
blankcut domains status <domain>               # certificate, DNS records, registration
blankcut domains list                          # every domain, and orders still in progress
```

**A domain registered somewhere else moves in three steps, in order:**

```bash
blankcut domains transfer check <domain>              # can it move, and what is in the way
blankcut domains transfer dns <domain>                # copy its DNS records over first
blankcut domains transfer start <domain> --app <APP>  # needs the current registrar's transfer code
```

Copy the DNS first and set the nameservers `transfer dns` prints at the current registrar: that is
what keeps the site and the domain's email working while it moves.

**Connecting a domain to an app is automatic.** Once the domain's certificate is issued, the
platform adds the domain to the app's deployment itself. Never hand-edit `ingressRoute.hosts` or
any other deployment config to serve a client domain — `attach` and `detach` are the switches, and
`blankcut domains status <domain>` shows how far along it is. When the domain is live, update any
site-URL setting the app reads (for example `NEXT_PUBLIC_SITE_URL`) with `blankcut secrets set`;
that is the app's own config, not routing.

**DNS for a domain the platform hosts** is managed with `blankcut domains records <domain>`,
`records set` and `records rm`. Records marked as managed by Blank Cut (certificate validation,
routing to the app) cannot be changed there; everything else — mail, verification TXT records — is
the client's to edit.

**Money and control.** Domains are registered at cost and charged to the organization's card in
Billing, and renew yearly unless `blankcut domains auto-renew <domain> off` is set. A registrant
contact (`blankcut domains contact set`) is required before the first purchase or transfer.
Buying, transferring in, auto-renew and the contact need the **organization owner's** key. Moving a
domain *out* to another registrar is done in Meerkat by a signed-in owner (Domains → the domain →
Transfer out), never from the CLI: `blankcut domains release` only points there.

Rules for agents:

- **Show the person the price** `buy` or `transfer start` prints and get their explicit go-ahead
  before passing `--yes`. Without `--yes` and without a terminal to ask on, these commands stop
  instead of spending money; that is the intended behaviour, not something to work around.
- **The transfer code is the person's to supply.** Have them run `transfer start` themselves (it
  asks without echoing), or set `BLANKCUT_DOMAIN_AUTH_CODE` in their own shell. Never ask for it in
  the conversation.
- **Moving a domain away is the person's to do in Meerkat.** No command hands out a domain's
  transfer code, by design: whoever holds it can take the domain. Don't look for another way to get
  one, and never ask for, write down or pass on a transfer code in either direction.

---

## 5. Common workflows

### 5.1 Onboard a new repo (the path that put this file here)

1. The repo was created (or the user clicked "Onboard repo" in the Meerkat UI).
2. `blankcut init` ran (locally) or `POST /init` ran (via Meerkat → Agent Service worker), opening a PR with the scaffolded layout including this `CLAUDE.md`.
3. Merge the PR.
4. Run `blankcut validate` — if anything fails, run `blankcut validate --fix` to delegate.
5. Run `blankcut promote --repo <THIS_REPO_URL>` to set up the CI/CD pipeline + Helm chart. If `init` ran locally rather than through Meerkat, nothing is registered yet and promote answers "not authorized": run `blankcut onboard` first.
6. Land the resulting PRs.

### 5.2 Fresh clone — pull existing secrets

```bash
git clone <REPO_URL> && cd <REPO_NAME>
blankcut secrets pull --app <APP>   # writes .env with mode 0600
```

If a key in `.env` already has a different value, the pull refuses by default. Inspect the diff and re-run with `--force` only if intentional.

### 5.3 Add a new environment variable

**First: is this value read in the browser?** If the key is named `NEXT_PUBLIC_*`, read § 4.7 — it
is compiled into the bundle at build time, so it also needs a rebuild to take effect, and a GitHub
repo variable is often the simpler route. The steps below are correct for it either way; step 4 is
what differs, because a public value does not wait on a GitOps merge to reach the browser.

1. Declare the key in `.env.example` (names only): add it with an empty value, e.g. `STRIPE_API_KEY=`, or run `blankcut secrets sync-example` to copy missing key names from your local `.env`.
2. Open a PR with the `.env.example` change and merge it to `main`. **This gate must merge first** — otherwise the write is rejected with `not_in_env_example`.
3. Set the value: `blankcut secrets set --app <APP> STRIPE_API_KEY <value>` (or update local `.env` and run `blankcut secrets push --app <APP>`). If the platform already holds a different value, the write is held back as `skipped` / `would_overwrite` — re-run with `--force` only if you intend to overwrite.
4. **If the app is deployed:** the platform auto-opens a GitOps MR wiring the new key into your deployment (see § 4.4). A maintainer merges it, then the pod gets the value on its next sync.
5. `blankcut secrets diff --app <APP>` should report the key as present in both.

### 5.4 Run the dev server with platform secrets

Prefer this over a hand-edited `.env` in ephemeral environments (CI runners, fresh sandboxes):

```bash
blankcut secrets run --app <APP> -- npm run dev
```

The wrapped process inherits the secrets via env; no file is written. The CLI's own auth credentials (`BLANKCUT_API_KEY`, `AWS_*`) are stripped from the child env.

### 5.5 Promote to prod

```bash
# Trigger the full pipeline:
blankcut promote --app <APP_NAME>

# Watch the live status:
blankcut status --app <APP>
```

### 5.6 Investigate a failing pipeline

```bash
blankcut status --app <APP>
```

The output shows:
- GitHub Actions: latest run conclusion, commit SHA, workflow URL
- ArgoCD: sync + health
- Kubernetes: pod counts + recent warning events
- GitLab: open MRs on the CI/CD repo

**If the site loads but every data call fails, suspect build-time config before you suspect the
code.** That is the signature of a missing `NEXT_PUBLIC_*` value: the bundle compiled with nothing
where the value should be, so the page renders and each request goes nowhere. § 4.7 has the fix, and
it needs a rebuild rather than a restart.

**If the run failed with "image scan blocked the push"**, the image was built but not pushed, so
nothing new deployed. Run `blankcut scan` and fix the packages it lists (§ 4.8).

For a reading of those facts rather than the facts themselves, run `blankcut diagnose --app <APP>` — it names the likely cause instead of leaving you to infer it from pod counts and warnings.

If a GHA run is red and the failure looks structural, `blankcut validate --fix` will reconcile what it can (build infrastructure drift, missing AWS secrets, missing platform files) within a bounded auto-fix loop.

### 5.7 Create a NEW project (not the one you are in)

`blankcut init` scaffolds the repo you are **already** in. `blankcut provision` creates a **brand-new** repo from scratch, seeds a runnable starter, registers the app, and provisions its backing services. Reach for it only when the user asks for a new project — never to try the platform out.

```bash
blankcut provision --name <NAME> --owner <GITHUB_ORG>
```

- `--owner` is the GitHub **organization** the Blank Cut GitHub App is installed on. The installation is looked up from it, so you do not need an installation id.
- The project is attributed to the organization your API key belongs to. A key cannot create projects for a different organization.
- **Personal GitHub accounts are not supported from the CLI.** They need a browser consent step the CLI cannot host — create those at [meerkat.blankcut.com](https://meerkat.blankcut.com).

**This one spends money.** It creates a real repository, a build project, a Kubernetes namespace and usually a database, all of which bill from the moment they exist. Do not run it speculatively, and do not retry a refusal — these are answers, not failures:

- **402 or 403 with a plan reason** — the organization's plan, trial, card or account status does not allow another project. Relay the message as given; it is not something you can work around from here.
- **503 `provisioning_not_enabled`** — this deployment has not enabled project creation from the CLI. Use the web console instead.

On success it prints the new repo and clone URL and seeds the starter in the background. Clone it and work inside **its** `CLAUDE.md`, not this one; deploy it with `blankcut promote --app <NAME>`.

---

## 6. Hard rule — never emit secret values

Secrets must NEVER appear in any of the following channels, in any form, under any circumstance:

- chat messages or commit messages
- PR titles or descriptions
- issue, review, or thread comments
- code comments
- documentation pages, READMEs, runbooks
- error messages, log lines, stack traces
- test fixtures, snapshots, golden files
- scaffolded examples, demo data, mock payloads
- any committed file other than `.env*` files that are gitignored

If you observe a value (e.g. in a stack trace, a test fixture, an existing file), redact it before any further mention as `<REDACTED:KEY_NAME>` and do not propagate the raw value. This rule applies to outputs you generate AND to existing values you encounter in the repo.

When in doubt: don't print the value, don't paste it, don't include it. The CLI's `secrets run -- <cmd>` is the right tool when a command needs the value but you don't.

---

## 7. Supported stacks & services — the platform contract

Blank Cut runs a deliberately small, opinionated set of stacks so every app gets the same guarantees (build, deploy, health, secrets). An app is checked against this contract at onboarding; apps outside it are rejected or held for manual review.

**Supported application stacks**

- **Node.js** — Next.js and Vite are first-class; Express / Fastify / NestJS APIs run too.
- **Python** — Flask, FastAPI, Django.
- **Go**.

**Provided backing services** (use these — don't bring your own):

- **PostgreSQL**, preferably **Supabase** (managed per app).
- **Redis** (in-cluster per app).

**Rules for any work in this repo**

- Stay within the supported stack. Do **not** introduce a different language/runtime, or a framework the platform doesn't run.
- Do **not** add infrastructure the platform doesn't provide (other databases, message brokers, search engines, etc.). If you think you need one, stop and ask — it likely means this app isn't a fit, or the capability should be requested from the platform team.
- Every service runs as a container and must expose a **`/health`** endpoint that returns 200 when healthy.
- Declare every environment variable the app needs in **`.env.example`** — that file is the allowlist the platform's secret store enforces. Public (`NEXT_PUBLIC_*`) keys belong there too; see § 4.7 for how they reach the build.
- Builds must be safe to run unattended: no piping downloaded scripts into a shell, no install-time hooks that fetch + execute, base images only from trusted registries. The onboarding gate flags these and pauses the app for review.

This keeps the fleet consistent and lets the platform actually support what you ship.

---

## 8. Where to look for more

- **Public docs — start here:** [docs.blankcut.com](https://docs.blankcut.com) — CLI reference, install/upgrade, the secrets workflow, and the supported-stack contract.
- **Web console:** [meerkat.blankcut.com](https://meerkat.blankcut.com) — create your account and projects, and issue the API key the CLI uses.
- **CLI releases, installer and license:** [`Blankcut/blankcut-cli-releases`](https://github.com/Blankcut/blankcut-cli-releases); Homebrew tap [`Blankcut/homebrew-tap`](https://github.com/Blankcut/homebrew-tap).
- **Architecture, service API surface, and wire contracts** (private; platform maintainers): see `docs/` and `contracts/` in [`Blankcut/blankcut-cli`](https://github.com/Blankcut/blankcut-cli).

Do not invent flags or endpoints. But **"not written above" is not proof it doesn't exist** — this file is a snapshot, and the CLI gains commands between refreshes. Before concluding the platform can't do something, check the binary, which is always authoritative:

```bash
blankcut --help              # every command this build ships
blankcut <command> --help    # its flags, defaults, and subcommands
blankcut sync                # refresh § 4 above if it looks older than your binary
```

If it isn't in `blankcut --help` either, then ask rather than guessing.

<!-- END BLANKCUT PLATFORM -->
