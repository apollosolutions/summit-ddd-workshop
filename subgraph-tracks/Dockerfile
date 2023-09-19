FROM node:18-bullseye-slim

WORKDIR /usr/app/

COPY package.json .

RUN npm install

COPY src/ ./src/

EXPOSE 4001

CMD ["npm", "start"]