const VehicleService = require("../services/vehicle-service");

const addVehicle = async (req, res, next) => {
  console.log("add blog function called---->");
  const { model, price, imageUrls, user } = req.body;
  console.log('request body at backend', model, price, imageUrls, user);

  const currentDate = new Date();
  const result = await VehicleService.addVehicle(model, price, imageUrls, user, currentDate);
  if (result?.error) {
    return res.send({ message: error })
  }
  else {
    console.log('result at backend', result);
    return res.status(201).json(result);
  }
};


module.exports = {
  addVehicle,
};
