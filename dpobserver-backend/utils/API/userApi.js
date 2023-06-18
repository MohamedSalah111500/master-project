const db = require("../database");
const User = require("../../models/user");

exports.fetchAllUsers = () => {
  return User.findAll();
};

exports.fetchUserById = (id) => {
  return User.findByPk(id);
};

// exports.fetchAllUsers = () => {
//   return db.execute("SELECT * FROM dpobserver.alert a , dpobserver.drivers d WHERE a.driverId = d.id");
// };
