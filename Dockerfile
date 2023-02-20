# syntax=docker/dockerfile:1
FROM node:19.6.1

WORKDIR /app

COPY . .

RUN yarn build

CMD ["yarn", "start"]