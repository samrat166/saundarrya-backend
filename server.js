const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
app.use(express.json());
app.use(cors());

//Routes
const customerroute = require("./Route/CustomerRoute");

//Middlewares
app.use("/", customerroute);

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://amanmongodb123:amanmongodb123@cluster0.raequ.mongodb.net/StreetAnimaRescue?retryWrites=true&w=majoritycluster0.raequ.mongodb.net",

  (err) => {
    try {
      console.log("connected to Db");
    } catch (err) {
      console.log(err.message);
    }
  }
);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
