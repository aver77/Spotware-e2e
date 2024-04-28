FROM node:20.10.0-alpine as build-stage
FROM mcr.microsoft.com/playwright:v1.43.1-jammy
WORKDIR /app
COPY package*.json ./
COPY ./ ./
RUN npm install