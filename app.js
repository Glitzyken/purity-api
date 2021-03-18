const express = require("express");
const userRouter = require("./routes/userRoute");

const app = express();

// Body parser
app.use(express.json());

app.use("/user", userRouter);

module.exports = app;
