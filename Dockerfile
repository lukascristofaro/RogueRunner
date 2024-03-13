FROM node:14

WORKDIR /usr/app

COPY /src/package.json .

RUN npm install --quiet

COPY ./src .

ENTRYPOINT ["npm", "start"]
