FROM node:20

WORKDIR /app

COPY pin-fe/package.json ./

RUN rm -rf node_modules package-lock.json
RUN npm install

COPY pin-fe/ .

EXPOSE 5173

CMD ["npm", "run", "dev"]