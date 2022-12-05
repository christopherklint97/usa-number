# syntax=docker/dockerfile:1
FROM node:19.2.0

WORKDIR /app

COPY . .

RUN yarn build

CMD ["yarn", "start"]