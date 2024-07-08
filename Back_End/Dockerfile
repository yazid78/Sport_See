FROM node:lts-alpine

ADD . /app/
WORKDIR /app

RUN npm ci
CMD [ "npm","start" ] 

EXPOSE 3000