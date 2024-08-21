FROM node:22 as build

WORKDIR /app

COPY package*.json /app/
RUN npm install

COPY . /app/

RUN npm run build

FROM nginx:latest