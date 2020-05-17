import * as express from 'express';
import RouterConfig from './master.route';

const app = express();

RouterConfig(app);

app.listen(3000, () => {
  console.log('server started at http://localhost:3000');
});