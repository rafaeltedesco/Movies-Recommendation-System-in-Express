const express = require("express");

const userRouter = require("./routes/user.route");
const movieRouter = require("./routes/movie.route");


const app = express();

app.use("/users", userRouter);
app.use("/movies", movieRouter);

module.exports = app;
