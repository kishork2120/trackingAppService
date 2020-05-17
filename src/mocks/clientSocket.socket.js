const socket = require('socket.io-client')('http://localhost:3000/');

for (let i = 0; i < 5; i++) {
  socket.emit('coordinates', {
    id: 3,
    coordinates: [
      77.012499,
      11.025000,
    ],
  });
};
