require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./config/db");
const authRoute = require("./routes/auth");
const aiRoute = require("./routes/aiRoutes");
const { autoAiLogin } = require("./utils/autoAILogin");
const { startAiScheduler } = require("./utils/aiScheduler");

const app = express();

const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Automatically log in AI characters
    await autoAiLogin();
    await startAiScheduler();

    // CORS Middleware
    app.use(
      cors({
        origin: ["http://localhost:5173", "http://192.168.29.9:5173"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
      })
    );

    // Middleware
    app.use(express.json());

    // Routes
    app.use("/users", authRoute);
    app.use("/ai", aiRoute);

    // Test route
    app.get("/", (req, res) => {
      res.send("API is running...");
    });

    // Start the server
    const HOST = "0.0.0.0";
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, HOST, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  } catch (error) {
    console.error("❌ Server startup failed:", error.message);
  }
};

startServer();
