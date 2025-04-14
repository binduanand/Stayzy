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
    url: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      set: (v) =>
        v === ""
          ? "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          : v,
    },
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
});

// Delete associated reviews when a stay is deleted
staysSchema.post("findOneAndDelete", async (stay) => {
  if (stay) {
    await Review.deleteMany({ _id: { $in: stay.reviews } });
  }
});

const Stay = mongoose.model("Stay", staysSchema);
module.exports = Stay;
