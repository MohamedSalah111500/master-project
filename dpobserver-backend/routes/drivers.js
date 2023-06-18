// imports from libs
const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const driversController = require("../controllers/driver");

router.get("/get-all", driversController.getAllDrivers);

router.post(
  "/create-driver",
  [body("label").trim().isLength({ min: 5 }),body("location").trim().isLength({ min: 5 })],
  driversController.postCreateDriver
);

module.exports = router;
