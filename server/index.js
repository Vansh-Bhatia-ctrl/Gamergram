require("dotenv").config();

const cors = require("cors");
const express = require("express");
const connectDB = require("./config/db");
const authRoute = require("./routes/auth");

const app = express();

// Connect to MongoDB
connectDB();

// CORS Middleware: Allow requests from frontend at http://localhost:5173
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware
app.use(express.json());

app.use("/users", authRoute);

// Basic test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
