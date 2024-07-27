FROM registry.cn-shanghai.aliyuncs.com/openstone/node:lts-alpine AS builder
WORKDIR /app
COPY . .
RUN npm --registry https://registry.npm.taobao.org  install && npm run docs:build

FROM registry.cn-shanghai.aliyuncs.com/openstone/nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/.vitepress/dist .
COPY ./static ./static
COPY ./16.0/static ./16.0/static
COPY ./17.0/static ./17.0/static
ENTRYPOINT ["nginx", "-g", "daemon off;"]
