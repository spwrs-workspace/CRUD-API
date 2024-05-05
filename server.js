const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = require('./app');

dotenv.config({ path: './config.env' });

const port = process.env.PORT;

const DB = process.env.DB_URL.replace('<password>', process.env.DB_PASSWORD);

mongoose.connect(DB).then((con) => {
  console.log('Database Connection Successful');
});

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
