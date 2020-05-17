import TableConfig from '../config/tableConfig.config';

/**
 * @class TrackService
 * @description Track service file for queries
 */
class TrackService {
  /**
   * getList
   * @description get pepole list
   * !For Testing purpose
   * @param {Object} db - db object for mongo
   * @return {Promise} - resolved to people list
   */
  getList(db: any) {
    return db.get(TableConfig.PEOPLE).find({});
  }
}

export default TrackService;
