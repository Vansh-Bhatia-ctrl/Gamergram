require("dotenv").config();
const cors = require("cors");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const session = require("express-session");
const passport = require("passport");

const connectDB = require("./config/db");
const authRoute = require("./routes/auth");
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
const saveAiTodb = require("./routes/savAiProfiles");
const getProfiles = require("./routes/getAiProfiles");
const userList = require("./routes/userList");
const getAllList = require("./routes/getAllList");
const saveCharacters = require("./routes/saveCharacterToDb");
const getCharacters = require("./routes/getCharacters");
const saveReviews = require("./routes/postReviews");
const fetchReviewsFromDB = require("./routes/fetchReviews");
const getQuizes = require("./routes/quizRoute");
const fetchUserData = require("./routes/fetchUserdetails");
const saveUserDataToDB = require("./routes/saveUserData");
const logoutUser = require("./routes/logoutRoute");

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
    app.use("/api/ai", saveAiTodb);
    app.use("/aiprofiles", getProfiles);
    app.use("/userlist", userList);
    app.use("/getlist", getAllList);
    app.use("/save-db", saveCharacters);
    app.use("/get-characters", getCharacters);
    app.use("/save-to-db", saveReviews);
    app.use("/getreviews", fetchReviewsFromDB);
    app.use("/getquiz", getQuizes);
    app.use("/getuserdata", fetchUserData);
    app.use("/saveusertodb", saveUserDataToDB);
    app.use("logout", logoutUser);

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
