const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');

// Load environment variables from a .env file
dotenv.config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB successfully");
});

// Middleware
app.use(express.json());
app.use(cookieParser());


// Routes
const authRoute = require("./routes/auth");
const cartRoute = require("./routes/cart");
const productsRoute = require("./routes/products");
const orderRoute = require("./routes/order");
const userRoute = require("./routes/user");

app.use(cors());
app.get("/", (req, res) => {
  res.status(200).send("working");
});
app.use("/api/auth", authRoute);
app.use("/api/cart", cartRoute);
app.use("/api/products", productsRoute);
app.use("/api/order", orderRoute);
app.use("/api/user", userRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
