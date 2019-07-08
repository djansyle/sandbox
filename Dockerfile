
FROM node:lts-alpine

WORKDIR /app

RUN apk add --no-cache bash

COPY package.json package-lock.json ecosystem.config.js  ./

COPY build ./build

COPY node_modules ./node_modules

RUN npm run build

EXPOSE 3000

CMD ["./node_modules/pm2/bin/pm2-runtime", "start", "ecosystem.config.js", "--only=app"]
