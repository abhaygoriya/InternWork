const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const app = express();

//Handlebars
// const hbs = expressHbs.create({
//   defaultLayout: "main-layout",
//   layoutsDir: path.join(__dirname, "views", "layouts"),
// });
// app.engine("handlebars", hbs.engine);
// app.set("view engine", "handlebars");

// app.set("view engine", "pug");

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes.routes);

app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found", path: "" });
});

app.listen(3000);
