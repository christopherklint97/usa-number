# syntax=docker/dockerfile:1
FROM node:18.10.0

WORKDIR /app

COPY . .

RUN yarn build

CMD ["yarn", "start"]