import monk from 'monk';

/**
 * @class DatabaseService
 * @description database service layer for connecting mongodb
 */
class DatabaseService {
  public db: any;

  /**
   * @constructor
   * @description - intialises mongo db instance variable
   */
  constructor() {
    this.db = monk(process.env.DATABASE_URL);
  }
}

export default DatabaseService;
