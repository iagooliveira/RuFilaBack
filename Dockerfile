FROM node:alpine3.11
WORKDIR /user/code
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3005
CMD ["npm", "run", "start:dev"]
