const { check, body } = require('express-validator');
const fetch = require('node-fetch');

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


exports.calcDriverPatternByAIModel = (req, res, next) => {
  let url = "http://127.0.0.1:5000/model";
  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "data": req.body.drivePattern })
   
  })
    .then(response => response.json())
    .then(response => {
      console.log(response,'response')
      req.body.dangerPercentage = +response,
      req.body.car= "64a5bd8af434418632b5cded";
      req.body.driver= "64a5c1b9f434418632b5ce02"; 
      // req.body.dangerPercentage = calcPrediction(response),
      req.body.label = response == 0 ? 'Normal Driving' : 'Abnormal Driving',
      next()
    }
    )
};

function calcPrediction(prediction) {
  if(prediction.prediction === 1) return 0
  let average = (prediction.right_distance + prediction.wrong_dist) / 2;
  let deviation = average - prediction.right_distance;
  let finalPercentage = (deviation * 100) / average;
  return finalPercentage.toFixed(2);
}