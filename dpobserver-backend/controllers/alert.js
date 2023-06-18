const factory = require('./handlersFactory');
const Alert = require('../models/alertModel');

// @desc    Get list of Alerts
// @route   GET /api/v1/alerts
// @access  Public
exports.getAlerts = factory.getAll(Alert);

// @desc    Get specific Alert by id
// @route   GET /api/v1/alerts/:id
// @access  Public
exports.getAlert = factory.getOne(Alert);

// @desc    Create Alert
// @route   POST  /api/v1/alerts
// @access  Private
exports.createAlert = factory.createOne(Alert);

// @desc    Update specific Alert
// @route   PUT /api/v1/alerts/:id
// @access  Private
exports.updateAlert = factory.updateOne(Alert);

// @desc    Delete specific Alert
// @route   DELETE /api/v1/alerts/:id
// @access  Private
exports.deleteAlert = factory.deleteOne(Alert);
