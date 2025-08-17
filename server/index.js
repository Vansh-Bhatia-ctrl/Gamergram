require("dotenv").config();
const cors = require("cors");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const session = require("express-session");
const passport = require("passport");

const connectDB = require("./config/db");
const authRoute = require("./routes/auth");
const twitchLiveStream = require("./routes/fetchLiveStream");
const generatecoverImages = require("./routes/RAWGcover");
const fetchAllGames = require("./routes/getAllGame");
const fetchGameData = require("./routes/getGameData");
const newsRoutes = require("./routes/getNewsData");
const getAllNews = require("./routes/getallnews");
const getYtTrailers = require("./routes/ytTrailers");
const getAllVid = require("./routes/getAllYTVideos");
const getNewsDets = require("./routes/newsDetails");
const saveComment = require("./routes/commentRoutes");
const getComments = require("./routes/getcomments");
const saveBookmark = require("./routes/savebookamarks");
const removeBookmarks = require("./routes/deletebookmarks");
const getBookmarks = require("./routes/getbookmarks");
const saveAiTodb = require("./routes/savAiProfiles");
const getProfiles = require("./routes/getAiProfiles");

const { startNewsCron } = require("./controllers/news/cronjobnews");
const { runPlaystationCronJob } = require("./jobs/playstationcron");
const { handleSocketConnection } = require("./websocket/socketHandlers");

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://192.168.29.9:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
});

handleSocketConnection(io);

const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

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
    app.use("/twitch", twitchLiveStream);
    app.use("/RAWG", generatecoverImages);
    app.use("/games", fetchAllGames);
    app.use("/gamedata", fetchGameData);
    app.use("/api/news", newsRoutes);
    app.use("/getnews", getAllNews);
    app.use("/yt", getYtTrailers);
    app.use("/ytvideos", getAllVid);
    app.use("/news", getNewsDets);
    app.use("/savecomment", saveComment);
    app.use("/getcomments", getComments);
    app.use("/save", saveBookmark);
    app.use("/remove", removeBookmarks);
    app.use("/getbookmarks", getBookmarks);
    app.use("/api/ai", saveAiTodb);
    app.use("/aiprofiles", getProfiles);

    startNewsCron();
    runPlaystationCronJob();

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

