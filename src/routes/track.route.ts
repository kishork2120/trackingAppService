import * as express from 'express';
import Track from '../controller/track.controller';

const router = express.Router();

router.get('/',Track.display);

export default router;