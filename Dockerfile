FROM node:14-alpine AS builder

COPY . /

WORKDIR /

COPY package.json /

RUN yarn install

CMD ["yarn","start"]
