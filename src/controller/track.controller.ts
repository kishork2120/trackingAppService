// eslint-disable-next-line no-unused-vars
import { Response, Request } from 'express';
import TrackService from '../models/track.model';

const trackServiceObject = new TrackService();
/**
 * @class Track
 * @description tracking api class
 */
class Track {
  /**
   * display
   * @description for testing track api
   * @param {Object} req request object from express request
   * @param {Object} res response object from express request
   */
  async display(req: Request, res: Response) {
    const list = await trackServiceObject.getList(req.app.locals.db);
    res.json({ message: 'people list', trackList: list });
  }
}

export default new Track();
