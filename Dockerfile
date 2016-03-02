FROM mhart/alpine-node

COPY . /app
WORKDIR /app
RUN apk add --no-cache git
RUN npm install
RUN ./node_modules/.bin/gulp bower

EXPOSE 8080

ENTRYPOINT ["npm", "start"]

CMD []
