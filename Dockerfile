# Build
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Gatsby writes .js.map alongside every bundle. Publishing those hands the full
# original source to anyone who asks for the URL — exactly how the source for
# two other sites in this account was recovered. They are dropped rather than
# served.
RUN find public -name '*.map' -delete

# Serve
#
# nginx-unprivileged: the stock image needs root to bind :80 and write its
# pid/cache, which the cluster's pod security baseline won't grant.
#
# 1.30 is nginx's current stable line (1.27 was a mainline release that stopped
# receiving fixes). The base image arrives with OS packages behind what Alpine
# has fixed, so they are upgraded here; the ADD before it is what makes that
# step re-run whenever Alpine publishes -- BuildKit re-checks a remote ADD on
# every build, while a RUN whose text has not changed is reused from the cache.
FROM nginxinc/nginx-unprivileged:1.30-alpine
USER root
ADD https://dl-cdn.alpinelinux.org/alpine/latest-stable/main/aarch64/APKINDEX.tar.gz /tmp/apkindex.tar.gz
RUN apk upgrade --no-cache
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build --chown=nginx:nginx /app/public /usr/share/nginx/html
USER 101
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -q --spider http://127.0.0.1:3000/ || exit 1
