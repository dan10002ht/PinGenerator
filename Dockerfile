FROM node:20

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 4000 5173

CMD ["npm", "run","start-dev"]