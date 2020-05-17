import TrackService from '../models/track.model';

// Creating object for track service
const trackServiceObject = new TrackService();

/**
 * @class TrackSocket
 * @description track socket class contains all the sockets for track page
 */
class TrackSocket {
  private db: any;
  /**
   * @constructor
   * @param {Object} db - database object from monk for mongodb
   */
  constructor(db: any) {
    this.db = db;
    this.onCoordinates = this.onCoordinates.bind(this);
  }

  /**
   * onCoordinates
   * @description - callback when coordinates recieved
   * @param {JSON} data - coordinate data with driver id
   */
  async onCoordinates(data) {
    await trackServiceObject.storeLocationData(this.db, data);
  }
}

export default TrackSocket;
