const express = require('express');
const assistantController = require('../controllers/assistantController');

const router = express.Router();

router
  .route('/')
  .get(assistantController.getAllAssistants)
  .post(assistantController.createAssistant);

router
  .route('/:id')
  .get(assistantController.getAssistant)
  .patch(assistantController.updateAssistant1)
  .put(assistantController.updateAssistant2)
  .delete(assistantController.deleteAssistant);

module.exports = router;
