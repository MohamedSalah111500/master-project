
const express = require('express');
const {
  getDriverValidator,
  createDriverValidator,
  updateDriverValidator,
  deleteDriverValidator,
} = require('../utils/validators/driverValidator');

const {
  getDrivers,
  getDriver,
  createDriver,
  updateDriver,
  deleteDriver,
} = require('../controllers/driver');

const router = express.Router();

router.route('/').get(getDrivers).post(createDriverValidator, createDriver);
router
  .route('/:id')
  .get(getDriverValidator, getDriver)
  .put(updateDriverValidator, updateDriver)
  .delete(deleteDriverValidator, deleteDriver);

module.exports = router;
