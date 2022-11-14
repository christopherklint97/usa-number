# syntax=docker/dockerfile:1
FROM node:19.0.1

WORKDIR /app

COPY . .

RUN yarn build

CMD ["yarn", "start"]