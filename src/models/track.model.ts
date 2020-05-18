import TableConfig from '../config/tableConfig.config';

/**
 * @class TrackService
 * @description Track service file for queries
 */
class TrackService {
  /**
   * getAllDriverList
   * @description get asll driver list
   * @param {Object} db - db object for mongo
   * @return {Promise} - resolved to people list
   */
  getAllDriverList(db: any) {
    return db.get(TableConfig.PEOPLE).find({ user_type: 'D' });
  }

  /**
   * storeLocationData
   * @description service to store location data in people collection
   * @param {Object} db - db object for mongo
   * @param {Object} body - body of the post request
   * @return {Promise} - resolved to stored data
   */
  storeLocationData(db: any, body: any) {
    return db.get(TableConfig.PEOPLE).findOneAndUpdate({ _id: body.id }, {
      $set: {
        'loc.coordinates': body.coordinates,
      },
    });
  }
}

export default TrackService;
