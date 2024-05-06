const Assistant = require('../models/assistantModel');

exports.getAllAssistants = async (req, res) => {
  const docs = await Assistant.find();

  res.status(200).json({
    status: 'sucess',
    results: docs.length,
    data: {
      data: docs,
    },
  });
};

exports.getAssistant = async (req, res) => {
  const doc = await Assistant.findById(req.params.id);

  res.status(200).json({
    status: 'sucess',
    data: {
      doc,
    },
  });
};

exports.createAssistant = async (req, res) => {
  const doc = await Assistant.create(req.body);

  res.status(201).json({
    status: 'sucess',
    data: {
      id: doc._id,
    },
  });
};

exports.updateAssistant1 = async (req, res) => {
  const doc = await Assistant.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    status: 'sucess',
    data: {
      doc,
    },
  });
};

exports.updateAssistant2 = async (req, res) => {
  const doc = await Assistant.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    status: 'sucess',
    data: {
      doc,
    },
  });
};

exports.deleteAssistant = async (req, res) => {
  const doc = await Assistant.findByIdAndDelete(req.params.id);

  if (!doc) {
    return next(new AppError('Document not found', 404));
  }

  res.status(204).json({
    status: 'sucess',
    data: null,
  });
};
