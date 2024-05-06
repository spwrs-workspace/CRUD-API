const Assistant = require('../models/assistantModel');

const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllAssistants = catchAsync(async (req, res, next) => {
  const docs = await Assistant.find();

  res.status(200).json({
    status: 'sucess',
    results: docs.length,
    data: {
      data: docs,
    },
  });
});

exports.getAssistant = catchAsync(async (req, res, next) => {
  const doc = await Assistant.findById(req.params.id);

  if (!doc) {
    return next(new AppError('Document not found', 404));
  }

  res.status(200).json({
    status: 'sucess',
    data: {
      doc,
    },
  });
});

exports.createAssistant = catchAsync(async (req, res, next) => {
  const doc = await Assistant.create(req.body);

  res.status(201).json({
    status: 'sucess',
    data: {
      id: doc._id,
    },
  });
});

exports.updateAssistant1 = catchAsync(async (req, res, next) => {
  const doc = await Assistant.findByIdAndUpdate(req.params.id, req.body);

  if (!doc) {
    return next(new AppError('Document not found', 404));
  }

  res.status(200).json({
    status: 'sucess',
    data: {
      doc,
    },
  });
});

exports.updateAssistant2 = catchAsync(async (req, res, next) => {
  const doc = await Assistant.findByIdAndUpdate(req.params.id, req.body);

  if (!doc) {
    return next(new AppError('Document not found', 404));
  }

  res.status(200).json({
    status: 'sucess',
    data: {
      doc,
    },
  });
});

exports.deleteAssistant = catchAsync(async (req, res, next) => {
  const doc = await Assistant.findByIdAndDelete(req.params.id);

  if (!doc) {
    return next(new AppError('Document not found', 404));
  }

  res.status(204).json({
    status: 'sucess',
    data: null,
  });
});
