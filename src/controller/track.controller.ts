import { Response, Request } from 'express';

class Track {

  display(req: Request, res: Response) {
    res.json({ message: 'this is tracking' });
  }

}

export default new Track();