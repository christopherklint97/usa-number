# syntax=docker/dockerfile:1
FROM node:current-alpine

WORKDIR /app

COPY . .

RUN yarn build