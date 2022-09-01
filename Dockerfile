# syntax=docker/dockerfile:1
FROM node:lts-alpine

WORKDIR /app

COPY . .

RUN yarn build

CMD ["yarn", "start"]