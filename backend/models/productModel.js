// Mongoose

const mongoose = require("mongoose");

// Schema function

const Schema = mongoose.Schema;

// Product schema

const productSchema = new Schema(
  {
    title: {
      type: String,
      maxlength: 30,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      max: 100,
      min: 1,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
