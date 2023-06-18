const mongoose = require("mongoose");
// 1- Create Schema
const carSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: [true, "type required"],
      minlength: [2, "Too short type name"],
      maxlength: [32, "Too long type name"],
    },

    image: {
      type: String,
      required: [true, "image required"],
    },
    model: {
      type: String,
      required: [true, "model required"],
    },
    version: {
      type: String,
      required: [true, "version required"],
    },
    driver: {
      type: mongoose.Schema.ObjectId,
      ref: "Driver",
      required: [true, "car must be belong to driver"],
    },
  },
  { timestamps: true }
);

// 2- Create model
module.exports = mongoose.model("Car", carSchema);
