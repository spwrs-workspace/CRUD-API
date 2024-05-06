const express = require('express');

const assistantRouter = require('./routes/assistantRoutes');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log('I am here');
  next();
});

app.use('/api/v1/assistant', assistantRouter);

module.exports = app;
