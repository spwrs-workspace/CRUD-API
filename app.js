const express = require('express');
const morgan = require('morgan');

const assistantRouter = require('./routes/assistantRoutes');
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');

const app = express();

app.use(express.json());

// app.use((req, res, next) => {
//   console.log('I am here');
//   next();
// });

// logger middleware
app.use(morgan('dev'));

app.use('/api/v1/assistant', assistantRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
