FROM node:14.16.1

WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock", "./"]

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "start" ]