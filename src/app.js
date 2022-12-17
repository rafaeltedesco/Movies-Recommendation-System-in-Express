require("dotenv").config();
const express = require("express");

const userRouter = require("./routes/user.route");
const movieRouter = require("./routes/movie.route");
const recommendationRouter = require("./routes/recommendation.route");
const { handleError } = require("./middlewares/errHandler");

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/movies", movieRouter);
app.use("/recommendation", recommendationRouter);
app.use(handleError);

module.exports = app;
