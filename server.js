const app = require('./app');

const port = process.env.PORT || 8000;
const server = app.listen(port);

process.on('uncaughtException', () => {
  process.exit(1);
});

process.on('unhandledRejection', () => {
  server.close(() => {
    process.exit(1);
  });
});
