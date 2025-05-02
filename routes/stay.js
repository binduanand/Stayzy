const express = require("express");
const router = express.Router();
const { isLoggedIn, isOwner } = require("../middleware.js");

const Stay = require("../models/stays.js");

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");

const { joiStaySchema } = require("../joiSchema.js");

const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

const { cloudinary } = require("../cloudConfig.js");

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

router.route("/").post(
  isLoggedIn,
  upload.single("stay[image]"),
  validateListing,
  wrapAsync(async (req, res, next) => {
    const { path: url, filename } = req.file;
    const newStay = new Stay(req.body.stay);

    newStay.owner = req.user._id;
    newStay.image = { url, filename };

    await newStay.save();
    req.flash("success", "New Listing Created");
    res.redirect("/stays");
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

router
  .route("/:id")
  .get(
    //show individual stay
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
  )
  .put(
    //update listing
    isLoggedIn,
    isOwner,
    upload.single("stay[image]"),
    validateListing,
    wrapAsync(async (req, res) => {
      let { id } = req.params;
      let stay = await Stay.findByIdAndUpdate(id, { ...req.body.stay });

      if (typeof req.file !== "undefined") {
        const { path: url, filename } = req.file;
        stay.image = { url, filename };
        await stay.save();
      }
      req.flash("success", "Listing Updated");
      res.redirect(`/stays/${id}`);
    })
  )
  .delete(
    //delete stay
    isLoggedIn,
    isOwner,
    wrapAsync(async (req, res) => {
      let { id } = req.params;

      const stay = await Stay.findById(id);
      if (stay.image && stay.image.filename) {
        await cloudinary.uploader.destroy(stay.image.filename);
      }

      await Stay.findByIdAndDelete(id);
      req.flash("success", "Listing Deleted");
      res.redirect("/stays");
    })
  );

module.exports = router;
