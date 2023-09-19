FROM node:18-bullseye-slim

WORKDIR /usr/app/

COPY package.json .
COPY src/ ./src/
COPY index.js .
COPY swaggerOptions.js .

RUN npm install

EXPOSE 5252

CMD ["npm", "start"]