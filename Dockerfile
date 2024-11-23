FROM node:20

WORKDIR /app

RUN apt-get update -y && apt-get install -y openssl

COPY . .

RUN yarn install -f

RUN yarn workspace @pin/be run generate-prisma # Run prisma generate after installing packages

EXPOSE 4000 5173

CMD ["npm", "run","start-dev"]