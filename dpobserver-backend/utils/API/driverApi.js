const Driver = require("../../models/driver");

exports.fetchAllDrivers = () => {
  return Driver.findAll();
};

exports.fetchDriverById = (id) => {
  return Driver.findByPk(id);
};

