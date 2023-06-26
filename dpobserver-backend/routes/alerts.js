
const express = require('express');

const {
  getAlertValidator,
  createAlertValidator,
  updateAlertValidator,
  deleteAlertValidator,
  calcDriverPatternByAIModel,
} = require('../utils/validators/alertValidator');

const {
  getAlerts,
  getAlert,
  createAlert,
  updateAlert,
  deleteAlert,
} = require('../controllers/alert');

const router = express.Router();

router.route('/').get(getAlerts).post(createAlertValidator, calcDriverPatternByAIModel, createAlert);
router
  .route('/:id')
  .get(getAlertValidator, getAlert)
  .put(updateAlertValidator, updateAlert)
  .delete(deleteAlertValidator, deleteAlert);

module.exports = router;
