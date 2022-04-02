FROM node:16-alpine3.11

LABEL MAINTAINER="Iqbal Maulana <iqbal.malana@programmer.net>"

RUN apk update
RUN apk add jpegoptim pngquant optipng gifsicle

WORKDIR /app

COPY package*.json .
RUN npm ci

COPY . .

ENTRYPOINT [ "npm", "start" ]