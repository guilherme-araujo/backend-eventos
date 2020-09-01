FROM node:14.4-buster

RUN mkdir /usr/app
WORKDIR /usr/app

COPY package.json package-lock.json ./
RUN npm install

EXPOSE 3333

CMD npm start