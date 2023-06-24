
const mongoose = require("mongoose");
// 1- Create Schema
const alertSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: [true, "Alert required"],
      minlength: [3, "Too short Alert name"],
      maxlength: [32, "Too long Alert name"],
    },
    dangerPercentage: {
      type: Number,
      required: [true, "Alert required"],
    },
    status: {
      type: String,
      required: [true, "Status required"],
    },
    location: {
      type: String,
      required: [true, "location required"],
    },
    description: {
      type: String,
    },
    drivePattern: {
      type: Object,
      required: [true, "drivePattern required"],
    },
    driver: {
      type: mongoose.Schema.ObjectId,
      ref: "Driver",
      required: [true, "alert must be belong to driver"],
    },
    car: {
      type: mongoose.Schema.ObjectId,
      ref: "Car",
      required: [true, " alert must be belong to Car"],
    },
  },
  { timestamps: true }
);

// Mongoose query middleware
alertSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'driver',
    // select: 'name -_id',
  });
  this.populate({
    path: 'car'  });
  next();
});

// 2- Create model
module.exports = mongoose.model("Alert", alertSchema);
