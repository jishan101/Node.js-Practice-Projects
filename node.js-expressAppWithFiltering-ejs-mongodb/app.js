const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const blogRoutes = require("./routes/blogRoutes.js");

const app = express();

dotenv.config();
const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI)
    .then(result => {
        app.listen(3000);
        console.log("Database connected");
    })
    .catch(err => {
        console.log(err);
    });

app.set("view engine", "ejs");

app.use(morgan("dev"));

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.use("/blogs", blogRoutes);

app.get("/", (req, res) => {
    res.redirect("/blogs");
});

app.get("/new", (req, res) => {
    res.render("createBlog", {title: "Create A New Blog"});
});

app.get("/about", (req, res) => {
    res.render("about", {title: "About Us!"});
});

app.use((req, res) => {
    res.status(404).render("404", {title: "404 Not Found!"});
});

