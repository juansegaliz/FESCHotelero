FROM node:22.3.0-alpine3.20 as base

FROM base as stage-build
WORKDIR /app

ARG serverUrl=http://www.ejemplofesc.com
ENV serverUrl=${serverUrl}

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN node set-env.js

RUN npm run build --prod

FROM base as stage-prod

WORKDIR /app

COPY --from=stage-build /app/dist/fescfrontend /app/

EXPOSE 4000

CMD [ "node","./server/server.mjs" ]