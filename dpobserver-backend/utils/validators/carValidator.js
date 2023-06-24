const { check, body } = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');

exports.getCarValidator = [
  check('id').isMongoId().withMessage('Invalid Car id format'),
  validatorMiddleware,
];

exports.createCarValidator = [
  check('type')
    .notEmpty()
    .withMessage('Car required')
    .isLength({ min: 1 })
    .withMessage('Too short Car type')
    .isLength({ max: 32 })
    .withMessage('Too long Car type'),
  check('image')
    .notEmpty()
    .withMessage('image is required')
  ,
  check('model')
    .notEmpty()
    .withMessage('model is required')
  ,
  check('driver')
    .notEmpty()
    .withMessage('driver is required')
  ,
  validatorMiddleware,
];

exports.updateCarValidator = [
  check('id').isMongoId().withMessage('Invalid Car id format'),
  check('type')
    .notEmpty()
    .withMessage('Car required')
    .isLength({ min: 1 })
    .withMessage('Too short Car type')
    .isLength({ max: 32 })
    .withMessage('Too long Car type'),
  check('image')
    .notEmpty()
    .withMessage('image is required')
  ,
  check('model')
    .notEmpty()
    .withMessage('model is required')
  ,
  check('driver')
    .notEmpty()
    .withMessage('driver is required')
  ,
  validatorMiddleware
];

exports.deleteCarValidator = [
  check('id').isMongoId().withMessage('Invalid Car id format'),
  validatorMiddleware,
];
