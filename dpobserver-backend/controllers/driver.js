const { validationResult } = require("express-validator");
const Driver = require("../models/driver");
const api = require("../utils/API/driverApi");

exports.postCreateDriver = (req, res, next) => {
  const { name, phone, email, dateOfBirth, address, image, licenseType,driverId } =
    req.body;
  Driver.create({
    email,
    address,
    dateOfBirth,
    name,
    phone,
    image,
    licenseType,
    driverId
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAllDrivers = (req, res, next) => {
  api
    .fetchAllDrivers()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(401).json({ message: err });
    });
};

exports.getDriverById = (req, res, next) => {
  const DriverId = req.params.id;
  // Website you wish to allow to connect
  api
    .fetchDriverById(DriverId)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
    });
};
