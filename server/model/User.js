const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    },
    phoneNumber: {
        type: Number,
        required: false,
        minlength: 11
    },

    vehicles: [{ type: mongoose.Types.ObjectId, ref: "Vehicle", required: true }],
})

module.exports = mongoose.model("User", userSchema);