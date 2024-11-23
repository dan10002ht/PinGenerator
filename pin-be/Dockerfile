FROM node:20

WORKDIR /app

COPY pin-be/package.json ./

RUN rm -rf node_modules package-lock.json
RUN npm install

COPY pin-be/ .

EXPOSE 4000

CMD ["npm", "start"]