import * as express from 'express';
import Track from '../controller/track.controller';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', Track.display);

export default router;
