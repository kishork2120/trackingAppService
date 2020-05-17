import Track from './routes/track.route';

// Exporting all master routers to index.ts file
export default (app) => {
  app.use('/track', Track);
};
