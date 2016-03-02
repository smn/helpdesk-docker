FROM mhart/alpine-node

RUN apk add --no-cache git
COPY . /app
WORKDIR /app
RUN npm install
RUN ./node_modules/.bin/gulp bower

EXPOSE 3000
ENV NODE_ENV production

ENTRYPOINT ["npm", "start"]

CMD []
