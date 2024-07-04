const Vehicle = require('../model/Vehicle');
const User = require('../model/User');
const VehicleService = {
    addVehicle: async function (model, price, imageUrls, user, currentDate) {
        let existingUser;
        try {
            existingUser = await User.findById(user);
            console.log("existing user---->", existingUser);
            if (!existingUser) {
                console.log("about to return a response--------------->");
                return { error: 'unathorized' }
            }
        } catch (e) {
            return e;
        }

        const vehicle = new Vehicle({
            model,
            price,
            imageUrls,
            user,
            date: currentDate,
        });

        try {
            console.log("about to save the vehicle---------------->");
            await vehicle.save();
            return { message: 'result saved successfully' }
        } catch (e) {
            return e;
        }
    },
}
module.exports = VehicleService;