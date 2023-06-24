
const express = require('express');
const {
  getCarValidator,
  createCarValidator,
  updateCarValidator,
  deleteCarValidator,
} = require('../utils/validators/carValidator');

const {
  getCars,
  getCar,
  createCar,
  updateCar,
  deleteCar,
} = require('../controllers/car');

const router = express.Router();

router.route('/').get(getCars).post(createCarValidator, createCar);
router
  .route('/:id')
  .get(getCarValidator, getCar)
  .put(updateCarValidator, updateCar)
  .delete(deleteCarValidator, deleteCar);

module.exports = router;
