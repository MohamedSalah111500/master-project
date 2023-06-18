const Car = require("../../models/cars");

exports.fetchAllCars = () => {
  return Car.findAll();
};

exports.fetchCarById = (id) => {
  return Car.findByPk(id);
};

