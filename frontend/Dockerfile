FROM node:22

WORKDIR /app

COPY frontend/package*.json /app/
RUN npm install

COPY frontend/ /app/

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
