FROM node:20
WORKDIR /coffee-shop
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm","start"]

