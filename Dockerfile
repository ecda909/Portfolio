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
FROM nginxinc/nginx-unprivileged:1.27-alpine
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build --chown=nginx:nginx /app/public /usr/share/nginx/html
USER 101
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -q --spider http://127.0.0.1:3000/ || exit 1
