const mongoose = require("mongoose");

const roomModel = mongoose.Schema({
  roomCategory: {
    type: String,
    required: true,
  },
  roomPrice: {
    type: Number,
    required: true,
  },
  roomImages: [
    {
      type: String,
      required: true,
    },
  ],
  roomDescription: {
    type: String,
    required: true,
  },
  roomSize: {
    type: Number,
    required: true,
  },
  maxpersons: {
    type: Number,
    required: true,
  },
  extraFacilities: [
    {
      type: String,
      //   required: true,
    },
  ],
  bookingStart: {
    type: Date,
  },
  bookingEnd: {
    type: Date,
  },
  // bookings: [],
  // booked:false // later on
});

module.exports = mongoose.model("Room", roomModel);
