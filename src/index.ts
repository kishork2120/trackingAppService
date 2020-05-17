import * as express from 'express';
import routerConfig from './master.route';
import DatabaseService from './services/database.service';
import socketFunctions from './socket/index';

// Initialising dotenv
require('dotenv').config();

const app = express();

// assigning database object to locals to use it as global instance
app.locals.db = new DatabaseService().db;

// Router configuration
routerConfig(app);

// Configuring server based on environment
let server;
{
  development: {
    // eslint-disable-next-line new-cap
    server = require('http').Server(app);
  }
} [process.env.NODE_ENV];

// initialising socket instance
const io = require('socket.io')(server);
socketFunctions(io, app.locals.db);

// Stringing server
server.listen(process.env.PORT, (err) => {
  if (err) console.error(err);
  else console.log(`server started at http://localhost:${process.env.PORT}`);
});
