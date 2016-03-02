FROM mhart/alpine-node

COPY . /app
WORKDIR /app

RUN npm install
RUN gulp bower

EXPOSE 8000

ENTRYPOINT ["npm", "start"]

CMD []
