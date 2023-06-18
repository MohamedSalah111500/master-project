// imports from libs
const express = require("express");
const { body } = require("express-validator");
const usersController = require("../controllers/user");


const router = express.Router();


router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getUserById);
router.post("/create-user", usersController.postCreateUser);

module.exports = router;
