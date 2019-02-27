FROM node

WORKDIR /app
COPY packages.json yarn.lock /app
RUN yarn install
COPY . .

RUN yarn test

CMD ["node", "src/server.js"]