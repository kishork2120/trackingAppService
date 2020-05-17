import Track from './routes/track.route';
export default (app) => {
  app.use('/track', Track);
}