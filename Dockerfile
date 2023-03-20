# syntax=docker/dockerfile:1
FROM node:19.8.1

WORKDIR /app

COPY . .

RUN yarn build

CMD ["yarn", "start"]