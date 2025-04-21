const mongoose = require("mongoose");
const Review = require("./review.js"); // Ensure correct path

const staysSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    url: String,
    filename: String,
  },
  price: {
    type: Number,
  },
  location: {
    type: String,
  },
  state: {
    type: String,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  category: {
    type: [String],
    enum: ["mountain", "beach", "trending", "city", "snow", "luxe"],
  },
});

// Delete associated reviews when a stay is deleted
staysSchema.post("findOneAndDelete", async (stay) => {
  if (stay) {
    await Review.deleteMany({ _id: { $in: stay.reviews } });
  }
});

const Stay = mongoose.model("Stay", staysSchema);
module.exports = Stay;
