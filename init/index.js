const mongoose = require("mongoose");
const initData = require("./data.js");
const Stay = require("../models/stays.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/stayzy";

main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Stay.deleteMany({});
  await Stay.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
