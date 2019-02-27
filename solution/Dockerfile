FROM node

WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install
COPY . .

CMD ["node", "src/server.js"]