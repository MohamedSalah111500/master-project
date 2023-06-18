const { validationResult } = require("express-validator");
const User = require("../models/user");
const api = require("../utils/API/userApi");

exports.postCreateUser = (req, res, next) => {
  const { name, phone, email, dateOfBirth, address, image } = req.body;
  User.create({
    email,
    address,
    dateOfBirth,
    name,
    phone,
    image,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAllUsers = (req, res, next) => {
  // findByPk()
  // Website you wish to allow to connect
  api
    .fetchAllUsers()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getUserById = (req, res, next) => {
  const userId = req.params.id;
  // Website you wish to allow to connect
  api
    .fetchUserById(userId)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
    });
};
