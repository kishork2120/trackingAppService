import * as express from 'express';
import Track from '../controller/track.controller';

// eslint-disable-next-line new-cap
const router = express.Router();

// Track routers
router.get('/getAllDriverList', Track.getAllDriverList);

export default router;
