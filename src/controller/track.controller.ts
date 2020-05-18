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
   * getAllDriverList
   * @description for getting all driver list
   * @param {Object} req request object from express request
   * @param {Object} res response object from express request
   */
  async getAllDriverList(req: Request, res: Response) {
    const list = await trackServiceObject.getAllDriverList(req.app.locals.db);
    res.json({ status: 200, essage: 'driver list', driverList: list });
  }
}

export default new Track();
