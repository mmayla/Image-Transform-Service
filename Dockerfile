FROM node:16.13
LABEL MAINTAINER Mohamed Mayla <mohamed.mayla@gmail.com>

RUN yarn global add pm2@latest --silent

WORKDIR /usr/src/app
COPY package*.json ./

COPY . .

RUN npm run install
RUN npm run build

EXPOSE 8080

CMD ["pm2-runtime", "./config/pm2.json"]
