FROM node:14

WORKDIR /usr/src

COPY src/package*.json ./

RUN npm install

RUN npm install express

RUN npm install -g nodemon

RUN npm install mysql2

RUN npm install bcrypt

EXPOSE 8080

CMD ["sh", "-c", "npm start"]
