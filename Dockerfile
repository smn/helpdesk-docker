FROM mhart/alpine-node

COPY . /app
WORKDIR /app
RUN apk add --no-cache git
RUN npm install
RUN gulp bower

EXPOSE 8000

ENTRYPOINT ["npm", "start"]

CMD []
