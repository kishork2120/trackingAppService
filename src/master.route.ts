import Track from './routes/track.route';

// Exporting all master routers to index.ts file
export default (app) => {
  // app.use('/', (req, res) => {
  //   // eslint-disable-next-line max-len
  //   res.sendFile('/home/cartrabbit/Learning/trackingAppService/src/mocks/testSocket.html');
  // });
  app.use('/track', Track);
};
