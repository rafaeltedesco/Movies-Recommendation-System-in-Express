FROM node:16-alpine

WORKDIR /usr/app/

COPY package*.json .

RUN npm install

CMD npm start