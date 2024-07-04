const express = require("express");
const {
  addVehicle,
} = require("../controller/vehicle-controller");

const vehicleRouter = express.Router();
vehicleRouter.post("/", addVehicle);
module.exports = vehicleRouter;
