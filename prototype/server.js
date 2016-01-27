import express from 'express';
import http from 'http';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';

import { routes } from './app/scripts/routes';

const app = express();
// var app = module.exports.app = exports.app = express();

app.use(express.static(__dirname + '/dist'));

app.set('views', __dirname + '/app/scripts/views');
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      const markup = renderToString(<RoutingContext {...props} />);

      res.render('index', { markup })

    } else {
      res.sendStatus(404);
    }
  });
});

const server = http.createServer(app);

server.listen(3003);
server.on('listening', () => {
  console.log('Listening on 3003');
});
