FROM node:16
WORKDIR /app
COPY . /app
RUN npm install
USER node
EXPOSE 3000
ENTRYPOINT ["npm", "start"]