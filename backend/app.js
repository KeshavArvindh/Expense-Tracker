const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const categoryRouter = require("./routes/categoryRouter");
const transactionRouter = require("./routes/transactionRouter");
const app = express();

//Connect to mongodb
mongoose
  .connect("mongodb+srv://wengaboy:mypassword@firstmongoproj.5guew.mongodb.net/expense-tracker") //your connection string
  .then(() => console.log("DB Connected"))
  .catch((e) => console.log(e));

//Cors configuration
const corsOptions = {
  origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));

//Middlewares
app.use(express.json()); //Pass incoming json data

//Routes
app.use("/", userRouter);
app.use("/", categoryRouter);
app.use("/", transactionRouter);

//Error
app.use(errorHandler);

//Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server is running on this port... ${PORT} `)
);
