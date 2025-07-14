require("dotenv").config();
const cors = require("cors");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const session = require("express-session");
const passport = require("passport");

const connectDB = require("./config/db");
const authRoute = require("./routes/auth");
const aiRoute = require("./routes/aiRoutes");
const aiChat = require("./routes/aiChatRoute");
const fetchAiCharacter = require("./routes/aiCharacterFetch");
const fetchsingleAI = require("./routes/fetchAiCharacter");
const twitchLiveStream = require("./routes/fetchLiveStream");
const generateIGDBcoverImages = require("./routes/RAWGcover");

const { autoAiLogin } = require("./utils/autoAILogin");
const aiChatSocket = require("./sockets/aiChatSocket");

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://192.168.29.9:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
});

aiChatSocket(io);

const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    // Automatically log in AI characters
    await autoAiLogin();

    //sessions for steam auth
    app.use(
      session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
          secure: false,
          maxAge: 1000 * 60 * 60 * 24,
        },
      })
    );

    // Passport middleware
    app.use(passport.initialize());
    app.use(passport.session());

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
    app.use("/chat", aiChat);
    app.use("/fetchai", fetchAiCharacter);
    app.use("/fetchsingleAI", fetchsingleAI);
    app.use("/twitch", twitchLiveStream);
    app.use("/RAWG", generateIGDBcoverImages);

    // Test route
    app.get("/", (req, res) => {
      res.send("API is running...");
    });

    // Start the server
    const HOST = "0.0.0.0";
    const PORT = process.env.PORT || 3000;
    server.listen(PORT, HOST, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  } catch (error) {
    console.error("❌ Server startup failed:", error.message);
  }
};

startServer();
