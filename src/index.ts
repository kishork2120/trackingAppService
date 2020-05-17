import * as express from 'express';
import routerConfig from './master.route';
console.log('objectss');
import DatabaseService from './services/database.service';

// Initialising dotenv
require('dotenv').config();

const app = express();

// assigning database object to locals to use it as global instance
app.locals.db = new DatabaseService().db;

// Router configuration
routerConfig(app);

// Stringing server
app.listen(process.env.PORT, (err) => {
  if (err) console.error(err);
  else console.log(`server started at http://localhost:${process.env.PORT}`);
});
