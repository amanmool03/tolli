# for production

FROM node:alpine

WORKDIR /app

COPY package.json .

#install dependencies without devDependencies
RUN npm install --production

COPY . . 

ENV NODE_ENV production

CMD [ "npm","run","server" ]