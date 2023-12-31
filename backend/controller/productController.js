// Mongoose

const mongoose = require("mongoose");

// Product Model

const Product = require("../models/productModel");

// Get All Products

const getProducts = async (req, res) => {
  const user_id = req.user._id;

  const products = await Product.find({ user_id }).sort({ createdAt: -1 });

  res.status(200).json(products);
};

// Get All Protein Products

const getProteins = async (req, res) => {
  const user_id = req.user._id;

  const proteins = await Product.find({ category: "Protein", user_id }).sort({
    createdAt: -1,
  });

  res.status(200).json(proteins);
};

// Get All Cretine Products

const getCreatines = async (req, res) => {
  const user_id = req.user._id;

  const creatines = await Product.find({ category: "Creatine", user_id }).sort({
    createdAt: -1,
  });

  res.status(200).json(creatines);
};

// Get All Pre-Workout Products

const getPreWorkouts = async (req, res) => {
  const user_id = req.user._id;

  const preWorkouts = await Product.find({
    category: "Pre-Workout",
    user_id,
  }).sort({
    createdAt: -1,
  });

  res.status(200).json(preWorkouts);
};

// Get A Single Product

const getProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: `Product doesn't exist` });
  }

  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({ error: `Product doesn't exist` });
  }

  res.status(200).json({ product });
};

// Post A New Product

const postProduct = async (req, res) => {
  // Values

  const { title, category, quantity } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }

  if (!category) {
    emptyFields.push("category");
  }

  if (!quantity) {
    emptyFields.push("quantity");
  }

  // Validation
  if (!title || !category || !quantity) {
    return res
      .status(400)
      .json({ error: "Missing required fields", emptyFields });
  }

  if (typeof quantity !== "number") {
    return res.status(400).json({ error: "Invalid data type for quantity" });
  }

  // Add document to database

  try {
    const user_id = req.user._id;
    const product = await Product.create({
      title,
      category,
      quantity,
      user_id,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete A Product

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: `Product doesn't exist` });
  }

  const product = await Product.findOneAndDelete({ _id: id });

  if (!product) {
    return res.status(404).json({ error: `Product doesn't exist` });
  }

  res.status(200).json(product);
};

// Patch A Product

const patchProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: `Product doesn't exist` });
  }

  // Values

  const { title, category, quantity } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }

  if (!category) {
    emptyFields.push("category");
  }

  if (!quantity) {
    emptyFields.push("quantity");
  }

  // Validation
  if (!title || !category || !quantity) {
    return res
      .status(400)
      .json({ error: "Missing required fields", emptyFields });
  }

  if (typeof quantity !== "number") {
    return res.status(400).json({ error: "Invalid data type for quantity" });
  }

  const product = await Product.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!product) {
    return res.status(404).json({ error: `Product doesn't exist` });
  }

  res.status(200).json(product);
};

// Export

module.exports = {
  postProduct,
  getProducts,
  getProduct,
  deleteProduct,
  patchProduct,
  getProteins,
  getPreWorkouts,
  getCreatines,
};
