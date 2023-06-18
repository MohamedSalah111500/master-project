// imports from libs
const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const carsController = require("../controllers/car");

router.get("/get-all", carsController.getAllCars);

router.post(
  "/create-car",
  [
    body("label").trim().isLength({ min: 5 }),
    body("location").trim().isLength({ min: 5 }),
  ],
  carsController.postCreateCar
);

module.exports = router;
