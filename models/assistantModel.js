const mongoose = require('mongoose');
const validator = require('validator');

const assistantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email address'],
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, 'Please provide correct email address'],
  },
  mobile: {
    type: String,
    required: [true, 'Please provide your mobile number'],
    validate: [validator.isMobilePhone, 'Please provide correct Mobile Number'],
  },
  salary: {
    type: Number,
    required: [true, 'Please provide your salary'],
  },
  country: {
    type: String,
    required: [true, 'Please provide your country'],
  },
  city: String,
  department: {
    type: String,
    required: [true, 'Please provide your department'],
  },
  role: {
    type: String,
    enum: [
      'administrative',
      'executive',
      'personal',
      'virtual',
      'research',
      'legal',
      'medical',
      'marketing',
      'sales',
      'customer-service',
    ],
    default: 'administrative',
  },
});

const Assistant = mongoose.model('Assistant', assistantSchema);

module.exports = Assistant;
