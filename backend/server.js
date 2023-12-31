// Enviroment variables

require("dotenv").config();

// Express

const express = require("express");

// Mongoose

const mongoose = require("mongoose");

// Products Router

const productsRouter = require("./routes/products");

// User Router

const userRouter = require("./routes/user");

// App

const app = express();

// Cors

const cors = require("cors");

// Middleware

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes

app.use(
  cors({
    origin: [
      "https://supplement-inventory.netlify.app",
      "http://localhost:5173",
    ],
    default: "https://supplement-inventory.netlify.app",
  })
);

app.use("/api/products", productsRouter);
app.use("/api/users", userRouter);

// Connect to database

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Initialize the app to listen to port

    const PORT = process.env.PORT;

    app.listen(PORT, () =>
      console.log(`Connected to database, Listening on port ${PORT}`)
    );
  })
  .catch((error) => {
    console.log(error);
  });
