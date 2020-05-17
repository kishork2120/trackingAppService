import TrackSocket from './track.socket';

/**
 * Socket endpoints
 * @description - this will contain socket endpoints
 * @param {Object} io - socket io object
 * @param {Object} db - database object from monk for mongodb
 */
export default function(io: any, db: any) {
  io.on('connection', (socket: any) => {
    console.log('A user connected');

    // ! for testing Testing
    socket.on('data', (data) => {
      console.log(data);
    });

    // Track sockets
    const trackSocket = new TrackSocket(db);
    socket.on('coordinates', trackSocket.onCoordinates);
  });
};
