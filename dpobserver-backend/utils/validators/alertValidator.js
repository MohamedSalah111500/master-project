const { check, body } = require('express-validator');
const validatorMiddleware = require('../../middlewares/validatorMiddleware');

exports.getAlertValidator = [
  check('id').isMongoId().withMessage('Invalid Alert id format'),
  validatorMiddleware,
];

exports.createAlertValidator = [
  check('label')
    .notEmpty()
    .withMessage('Alert required')
    .isLength({ min: 3 })
    .withMessage('Too short Alert label')
    .isLength({ max: 32 })
    .withMessage('Too long Alert label')
  ,
  validatorMiddleware
];

exports.updateAlertValidator = [
  check('id').isMongoId().withMessage('Invalid Alert id format'),
  validatorMiddleware,
];

exports.deleteAlertValidator = [
  check('id').isMongoId().withMessage('Invalid Alert id format'),
  validatorMiddleware,
];
