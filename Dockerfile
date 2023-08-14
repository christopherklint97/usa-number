# syntax=docker/dockerfile:1
FROM node:20.5.1

WORKDIR /app

COPY . .

RUN yarn build

CMD ["yarn", "start"]