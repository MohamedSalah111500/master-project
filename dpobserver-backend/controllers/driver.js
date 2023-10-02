
const factory = require('./handlersFactory');
const Driver = require('../models/driver');

// @desc    Get list of Driver
// @route   GET /api/v1/Driver
// @access  Public
exports.getDrivers = factory.getAll(Driver);

// @desc    Get specific Driver by id
// @route   GET /api/v1/Drivers/:id
// @access  Public
exports.getDriver = factory.getOne(Driver);

// @desc    Create Driver
// @route   POST  /api/v1/Drivers
// @access  Private
exports.createDriver = factory.createOne(Driver);

// @desc    Update specific Driver
// @route   PUT /api/v1/Driver/:id
// @access  Private
exports.updateDriver = factory.updateOne(Driver);

// @desc    Delete specific Driver
// @route   DELETE /api/v1/Drivers/:id
// @access  Private
exports.deleteDriver = factory.deleteOne(Driver);