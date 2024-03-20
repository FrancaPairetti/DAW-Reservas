FROM node:20 as build-step

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH



COPY package.json /usr/src/app/package.json

RUN npm install



COPY . /usr/src/app

CMD ng serve --host 0.0.0.0
