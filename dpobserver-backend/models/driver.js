const mongoose = require("mongoose");
// 1- Create Schema
const driverSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name required"],
      minlength: [3, "Too short  name"],
      maxlength: [32, "Too long name "],
    },
    phone: {
      type: String,
      required: [true, "phone required"],
      minlength: [8, "Too short  phone"],
      maxlength: [32, "Too long  phone"],
    },
    email: {
      type: String,
      required: [true, "email required"],
    },
    status: {
      type: String,
      required: [true, "Status required"],
    },

    dateOfBirth: {
      type: Date,
      required: [true, "location required"],
    },
    description: {
      type: String,
    },
    licenseType: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "address required"],
    },
    image: {
      type: String,
    },
 

  },
  { timestamps: true }
);

// 2- Create model
module.exports = mongoose.model("Driver", driverSchema);
