const express = require("express");
const router = express.Router();
const { isLoggedIn, isOwner } = require("../middleware.js");

const Stay = require("../models/stays.js");

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");

const { joiStaySchema } = require("../joiSchema.js");

//validate data using joi
const validateListing = (req, res, next) => {
  const result = joiStaySchema.validate(req.body);
  if (result.error) {
    let errMsg = result.error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//explore stays
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allStays = await Stay.find({});
    res.render("stays/index.ejs", { allStays });
  })
);

//add newstay form
router.get(
  "/new",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    res.render("stays/new.ejs");
  })
);

//create route
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(async (req, res, next) => {
    const newStay = new Stay(req.body.stay);
    newStay.owner = req.user._id;
    await newStay.save();
    req.flash("success", "New Listing Created");
    res.redirect("/stays");
  })
);

//edit stay info form
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const stayToEdit = await Stay.findById(id);
    if (!stayToEdit) {
      req.flash("error", "Listing Does Not Exist");
      res.redirect("/stays");
    }
    res.render("stays/edit.ejs", { stayToEdit });
  })
);

//update listing
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Stay.findByIdAndUpdate(id, { ...req.body.stay });
    req.flash("success", "Listing Updated");
    res.redirect(`/stays/${id}`);
  })
);

//show stay
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const stay = await Stay.findById(id)
      .populate({
        path: "reviews",
        populate: {
          path: "author",
        },
      })
      .populate("owner");

    if (!stay) {
      req.flash("error", "Listing Does Not Exist");
      res.redirect("/stays");
    }

    res.render("stays/show.ejs", { stay });
  })
);

//delete stay
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;

    await Stay.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted");
    res.redirect("/stays");
  })
);

module.exports = router;
