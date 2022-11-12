const http = require('http');
const express = require('express');
const errorHandler = require('express-error-middleware');
const config = require('config');
const bodyparser = require('body-parser');

const events = require('./app/events');
const routes = require('./app/endpoint');
// init server
const app = express();

app.use(bodyparser.json({ limit: '7mb', type: ['application/json', 'text/plain'] }));
app.use(bodyparser.urlencoded({ limit: '7mb', extended: true }));

app.use('/', routes);
// app.use(errorHandler.NotFoundMiddleware);
app.use(errorHandler.ErrorsMiddleware);

const server = http.createServer(app);

const port = config.get('port') || 3000;

// define server event to handle or unhandle process.
server.on('error', events.onServerError);
process.on('SIGINT', events.onProcessKill(server));
process.on('SIGTERM', events.onProcessKill(server));
process.on('unhandledRejection', events.onException);
process.on('uncaughtException', events.onException);

module.exports = app.listen(port, () => events.onListen(port));
