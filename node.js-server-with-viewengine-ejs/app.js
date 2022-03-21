const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Blog = require("./models/blog.js");

//express app
const app = express();

//connecting to mongodb using mongoose api
dotenv.config();
const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(3000);
        console.log("Connected to DB.");
    })
    .catch((err) => console.log(err));

//registering view engine
app.set("view engine", "ejs");
// app.set("views", "folderName"); //this line is for when folder containing ejs files is not named views

//listening for request on port 3000
// app.listen(3000);

app.use(morgan("dev")); //we can use morgan Middleware to log the request

//setting up Express static files folder
app.use(express.static("public"));

//mongoose and mongo sandbox routes
// app.get("/add-blog", (req, res) => {
//     const blog = new Blog({
//         title: "new blog 2",
//         snippet: "Snippet of my new blog 2.",
//         body: "Body of my new blog 2."
//     });

//     blog.save()
//         .then(result => res.send(result))
//         .catch(err => console.log(err));
// });

// app.get("/all-blogs", (req, res) => {
//     Blog.find()
//         .then(result => res.send(result))
//         .catch(err => console.log(err));
// });

// app.get("/single-blog", (req, res) => {
//     Blog.findById("61f447fc34a91f4de847203e")
//         .then(result => res.send(result))
//         .catch(err => console.log(err));
// });

// app.get("/update-blog", (req, res) => {
//     Blog.updateOne("61f447fc34a91f4de847203e", {
//         title: "new blog 2 updated",
//         snippet: "Snippet of my new blog 2 updated.",
//         body: "Body of my new blog 2 updated."
//     })
//         .then(result => res.send(result))
//         .catch(err => console.log(err));
// });

// app.use((req, res, next) => {
//     console.log("This is a Express Middleware");
//     console.log("Host: ", req.hostname);
//     console.log("Path: ", req.path);
//     console.log("Methos: ", req.method);
//     next(); //we can use next() function to go to next Middleware after finish the current process
// });

//home/blogs route
app.get("/blogs", (req, res) => {
    Blog.find().sort({createdAt: -1})
        .then(result => res.render("index", {title: "Home | Blogs", blogs: result}))
        .catch(err => console.log(err));
});

app.get("/", (req, res) => {
    res.redirect("/blogs");
});

//redirect
app.get("/home", (req, res) => {
    res.redirect("/blogs");
});

app.get("/about", (req, res) => {
    res.render("about", {title: "About"});
});

//redirect
app.get("/about-me", (req, res) => {
    res.redirect("/about");
});

app.get("/new", (req, res) => {
    res.render("new-blog", {title: "Create New Blog"});
});

//404
app.use((req, res) => {
    res.status(404).render("404", {title: 404});
});

