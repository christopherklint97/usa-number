# syntax=docker/dockerfile:1
FROM node:16.16.0

WORKDIR /app

COPY . .

RUN yarn build

CMD ["yarn", "start"]