const express = require("express");
const router = express.Router({ mergeParams: true });
const { isLoggedIn, isAuthor } = require("../middleware.js");

const Stay = require("../models/stays.js");
const Review = require("../models/review.js");

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");

//validate review using joi
const validateReview = (req, res, next) => {
  const result = joiReviewSchema.validate(req.body);
  if (result.error) {
    let errMsg = result.error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};



//create review
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let stay = await Stay.findById(id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    stay.reviews.push(newReview);
    await newReview.save();
    await stay.save();
    res.redirect(`/stays/${stay._id}`);
  })
);

//delete review
router.delete(
  "/:revId",
  isLoggedIn,
  isAuthor,
  wrapAsync(async (req, res) => {
    let { id, revId } = req.params;
    await Stay.findByIdAndUpdate(id, { $pull: { reviews: revId } });
    await Review.findByIdAndDelete(revId);

    res.redirect(`/stays/${id}`);
  })
);

module.exports = router;
const { joiReviewSchema } = require("../joiSchema.js");

