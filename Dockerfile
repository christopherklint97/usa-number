# syntax=docker/dockerfile:1
FROM node:20.2.0

WORKDIR /app

COPY . .

RUN yarn build

CMD ["yarn", "start"]