const { check, body } = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');

exports.getDriverValidator = [
  check('id').isMongoId().withMessage('Invalid Driver id format'),
  validatorMiddleware,
];

exports.createDriverValidator = [
  check('name')
    .notEmpty()
    .withMessage('Driver required')
    .isLength({ min: 1 })
    .withMessage('Too short Driver type')
    .isLength({ max: 32 })
    .withMessage('Too long Driver type'),
  check('image')
    .notEmpty()
    .withMessage('image is required')
  ,
  check('phone')
    .notEmpty()
    .withMessage('phone is required')
    .isLength({ min: 10 })
    .withMessage('Too short Driver phone')
  ,
  check('status')
    .notEmpty()
    .withMessage('status is required'),
  check('dateOfBirth')
    .notEmpty()
    .withMessage('dateOfBirth is required'),
  check('address')
    .notEmpty()
    .withMessage('address is required'),

  check('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('email should follow email pattern')
  ,
  validatorMiddleware,
];

exports.updateDriverValidator = [
  check('id').isMongoId().withMessage('Invalid Driver id format'),
  check('type')
    .notEmpty()
    .withMessage('Driver required')
    .isLength({ min: 1 })
    .withMessage('Too short Driver type')
    .isLength({ max: 32 })
    .withMessage('Too long Driver type'),
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

exports.deleteDriverValidator = [
  check('id').isMongoId().withMessage('Invalid Driver id format'),
  validatorMiddleware,
];
