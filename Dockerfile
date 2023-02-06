# syntax=docker/dockerfile:1
FROM node:19.6.0

WORKDIR /app

COPY . .

RUN yarn build

CMD ["yarn", "start"]