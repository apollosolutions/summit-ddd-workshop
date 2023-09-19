FROM node:18-bullseye-slim

WORKDIR /usr/app/

COPY package.json .

RUN npm install

COPY src/ ./src/

EXPOSE 4002

CMD ["npm", "start"]
