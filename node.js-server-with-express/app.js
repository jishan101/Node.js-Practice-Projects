const express = require("express");

//express app
const app = express();

//listening for request on port 3000
app.listen(3000, () => {
    console.log("listening at port 3000");
});

app.get("/", (req, res) => {
    res.sendFile("./files/index.html", {root: __dirname});
});

//redirect
app.get("/home", (req, res) => {
    res.redirect("/");
});

app.get("/about", (req, res) => {
    res.sendFile("./files/about.html", {root: __dirname});
});

//redirect
app.get("/about-me", (req, res) => {
    res.redirect("/about");
});

//404
app.use((req, res) => {
    res.status(404).sendFile("./files/404.html", {root: __dirname});
});

