require('dotenv').config()
const express = require("express");

const userRouter = require("./routes/user.route");
const movieRouter = require("./routes/movie.route");
const recommendationRouter = require('./routes/recommendation.route')


const app = express();

app.use("/users", userRouter);
app.use("/movies", movieRouter);
app.use('/recommendation', recommendationRouter)

module.exports = app;
