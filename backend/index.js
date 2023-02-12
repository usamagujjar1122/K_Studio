const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require('./Routes/userRoutes')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/user", userRoutes);

mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser: true,useUnifiedTopology: true,})
    .then((err)=>{console.log("connected")})


app.listen(5000, function () {
  console.log("app running on 5000");
});
