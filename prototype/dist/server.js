'use strict';

var _babelCore = require('babel-core');

var _babelCore2 = _interopRequireDefault(_babelCore);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _routes = require('../app/scripts/routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
// var app = module.exports.app = exports.app = express();

app.use(_express2.default.static(__dirname + '/dist'));

app.set('views', __dirname + '/app/scripts/views');
app.set('view engine', 'ejs');

app.get('*', function (req, res) {
  (0, _reactRouter.match)({ routes: _routes.routes, location: req.url }, function (err, redirectLocation, props) {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      var markup = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RoutingContext, props));

      res.render('index', { markup: markup });
    } else {
      res.sendStatus(404);
    }
  });
});

var server = _http2.default.createServer(app);
var PORT = process.env.PORT || 8080;
server.listen(PORT);
server.on('listening', function () {
  console.log('Listening on ' + PORT);
});
