// Express

const express = require("express");

// Imports

const {
  postProduct,
  getProducts,
  getProduct,
  deleteProduct,
  patchProduct,
  getProteins,
  getCreatines,
  getPreWorkouts,
} = require("../controller/productController");
const requireAuth = require("../middleware/requireAuth");

// Router

const router = express.Router();

// requireAuth

router.use(requireAuth);

// Get All Products

router.get("/", getProducts);

// Get All Protein Products

router.get("/protein", getProteins);

// Get All Creatine Products

router.get("/creatine", getCreatines);

// Get All Pre-Workout Products

router.get("/pre-workout", getPreWorkouts);

// Get A Single Product

router.get("/:id", getProduct);

// Post A New Product

router.post("/", postProduct);

// Delete A Product

router.delete("/:id", deleteProduct);

// Patch A Product

router.patch("/:id", patchProduct);

module.exports = router;
