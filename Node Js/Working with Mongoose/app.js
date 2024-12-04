const path = require("path");
const cors = require("cors");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const errorController = require("./controllers/error");
// const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use((req, res, next) => {
//   User.findById("674fe764689f434ff9ce3107")
//     .then((user) => {
//       req.user = new User(user.name, user.email, user.cart, user._id);
//       next();
//     })
//     .catch((err) => console.log(err));
// });

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    `mongodb+srv://abhay:Abhay123Abhay@cluster0.qnjka.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });
