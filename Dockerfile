# syntax=docker/dockerfile:1
FROM node:current-alpine

ENV PORT="8000"

WORKDIR /app

COPY . .

RUN yarn build

RUN yarn start

EXPOSE ${PORT}