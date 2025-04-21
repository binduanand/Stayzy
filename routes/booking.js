const express = require("express");
const router = express.Router({ mergeParams: true });
const { isLoggedIn } = require("../middleware.js");

const Booking = require("../models/bookings.js");
const Stay = require("../models/stays.js");

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");

const { joiBookingSchema } = require("../joiSchema.js");

//validate booking using joi
const validateBooking = (req, res, next) => {
  const result = joiBookingSchema.validate(req.body);
  if (result.error) {
    let errMsg = result.error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

router.post(
  "/stays/:id/book",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let stay = await Stay.findById(id);

    if (!stay) {
      return res.status(404).send("Stay not found");
    }

    let newBooking = new Booking(req.body.booking);


    newBooking.user = req.user._id;
    newBooking.stay = id;

    await newBooking.save();

    req.flash("success", "Stay Booked");
    res.redirect(`/stays/${stay._id}`);
  })
);

router.get("/bookings", wrapAsync(async(req,res) => {
  let allBookings = await Booking.find({user : req.user._id}).populate("stay");
  res.render("stays/bookings.ejs", {allBookings});
}))


module.exports = router;
