const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = require('./app');

//handling uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception 🥺. Shutting Application...');
  // console.log(err);
  console.log(err.name, err.message);

  process.exit(1);
});

dotenv.config({ path: './config.env' });

const port = process.env.PORT;

const DB = process.env.DB_URL.replace('<password>', process.env.DB_PASSWORD);

mongoose.connect(DB).then((con) => {
  console.log('Database Connection Successful');
});

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//handling unhandled rejections
process.on('unhandledRejection', (err) => {
  console.log('Unhandled Rejection 🥺. Shutting Application...');
  console.log(err.name, err.message);

  //gracefully closing the server so that pending requests and currently executing tasks should be completed first before server shudowns

  server.close(() => {
    process.exit(1);
  });
});
