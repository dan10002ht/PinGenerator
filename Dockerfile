FROM node:20

WORKDIR /app

COPY package.json ./

RUN rm -rf node_modules package-lock.json
RUN npm install

COPY . .

EXPOSE 4000 5173

CMD ["npm", "run","start-dev"]