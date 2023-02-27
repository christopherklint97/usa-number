# syntax=docker/dockerfile:1
FROM node:19.7.0

WORKDIR /app

COPY . .

RUN yarn build

CMD ["yarn", "start"]