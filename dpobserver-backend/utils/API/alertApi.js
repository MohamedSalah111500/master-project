const Alert = require("../../models/alert");
const Car = require("../../models/cars");
const Driver = require("../../models/driver");

exports.fetchAllAlerts = () => {
  return Alert.findAll({ include: [Driver,Car], order: [["createdAt", "DESC"]] });
};

exports.fetchAlertById = (id) => {
  return Alert.findByPk(id);
};
