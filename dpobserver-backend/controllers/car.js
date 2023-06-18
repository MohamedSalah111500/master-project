const { validationResult } = require("express-validator");
const Car = require("../models/cars");
const api = require("../utils/API/carApi");

exports.postCreateCar = (req, res, next) => {
  const { type, model, version, driverId, image } = req.body;
  Car.create({
    version,
    driverId,
    type,
    model,
    image,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAllCars = (req, res, next) => {
  api
    .fetchAllCars()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(401).json({ message: err });
    });
};

exports.getCarById = (req, res, next) => {
  const CarId = req.params.id;
  // Website you wish to allow to connect
  api
    .fetchCarById(CarId)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
    });
};
