const express = require('express');

const assistantRouter = require('./routes/assistantRoutes');

const app = express();

app.use('/', assistantRouter);
module.exports = app;
