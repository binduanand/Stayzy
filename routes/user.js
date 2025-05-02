const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const User = require("../models/user.js");

router
  .route("/signup")
  .get((req, res) => {
    res.render("users/signup.ejs");
  })
  .post(
    saveRedirectUrl,
    wrapAsync(async (req, res) => {
      try {
        let { username, email, password } = req.body;
        let newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
          if (err) {
            return next(err);
          }
          req.flash("success", "Welcome to Stayzy! Registered Successfully!");
          let redirectUrl = res.locals.redirectUrl || "/stays";
          res.redirect(redirectUrl);
        });
      } catch (err) {
        req.flash("error", "Username already exists");
        res.redirect("/");
      }
    })
  );

router
  .route("/login")
  .get((req, res) => {
    res.render("users/login.ejs");
  })
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    async (req, res) => {
      req.flash("success", "Login Successful");
      let redirectUrl = res.locals.redirectUrl || "/stays";
      res.redirect(redirectUrl);
    }
  );

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "You are Logged Out");
    res.redirect("/");
  });
});

module.exports = router;
