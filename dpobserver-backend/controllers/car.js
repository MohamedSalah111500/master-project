
const factory = require('./handlersFactory');
const Car = require('../models/cars');

// @desc    Get list of Car
// @route   GET /api/v1/Car
// @access  Public
exports.getCars = factory.getAll(Car);

// @desc    Get specific Car by id
// @route   GET /api/v1/Cars/:id
// @access  Public
exports.getCar = factory.getOne(Car);

// @desc    Create Car
// @route   POST  /api/v1/Cars
// @access  Private
exports.createCar = factory.createOne(Car);

// @desc    Update specific Car
// @route   PUT /api/v1/Cars/:id
// @access  Private
exports.updateCar = factory.updateOne(Car);

// @desc    Delete specific Car
// @route   DELETE /api/v1/Cars/:id
// @access  Private
exports.deleteCar = factory.deleteOne(Car);
