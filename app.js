if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");

const session = require("express-session");
const flash = require("connect-flash");
const MongoStore = require("connect-mongo");

const passport = require("passport");
const LocalStrategy = require("passport-local");

const wrapAsync = require("./utils/wrapAsync.js");

const staysRouter = require("./routes/stay.js");
const reviewsRouter = require("./routes/review.js");
const usersRouter = require("./routes/user.js");
const bookingRouter = require("./routes/booking.js");

const User = require("./models/user.js");
const Stay = require("./models/stays.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

//connect to mongodb
// const MONGO_URL = "mongodb://127.0.0.1:27017/stayzy";
const dbUrl = process.env.ATLAS_DB_URL;

main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

store.on("error", () => {
  console.log("Error in mongo session store", err);
});

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

app.get(
  "/",
  //explore stays
  wrapAsync(async (req, res) => {
    let { filter, q } = req.query;
    let query = {};
    if (filter) {
      query.category = { $in: [filter] };
    }

    if (q) {
      query.$or = [
        { state: { $regex: q, $options: "i" } },
        { location: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } },
      ];
    }

    const allStays = await Stay.find(query);
    if (allStays.length === 0) {
      return res.render("stays/index.ejs", {
        allStays,
        noResults: true,
      });
    }

    res.render("stays/index.ejs", { allStays });
  })
);
app.use("/stays", staysRouter);
app.use("/stays/:id/reviews", reviewsRouter);
app.use("/", usersRouter);
app.use("/", bookingRouter);

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.render("error.ejs", { statusCode, message });
});

app.listen(8080, () => {
  console.log("server is listening on port 8080");
});
