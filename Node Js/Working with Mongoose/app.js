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
const User = require("./models/user");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById("67513f62f16b0c010e1254fb")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    `mongodb+srv://abhay:Abhay123Abhay@cluster0.qnjka.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then((result) => {
    User.findById("67513f62f16b0c010e1254fb")
      .then((user) => {
        if (!user) {
          const newUser = new User({
            name: "Abhay",
            email: "abhay@test.com",
            cart: {
              items: [],
            },
          });
          return newUser.save();
        }
        return user;
      })
      .then((result) => {
        app.listen(3000);
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });
