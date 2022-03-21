const http = require("http");
const fs = require("fs");
const _ = require("lodash");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //lodash
    // const num = _.random(0.00, 11.00);
    // console.log(num);

    // const oneTimeFunction = _.once(() => {
    //     console.log("This is a one time function.");
    // });
    // oneTimeFunction();
    // oneTimeFunction();

    //set header content type
    res.setHeader("Content-Type", "text/html");

    //routing for different page requests
    let path = "./files/";

    if(req.url === "/") {
        path += "index.html";
        res.statusCode = 200;
    } else if(req.url === "/home") {
        res.statusCode = 301;
        res.setHeader("Location", "/");
        res.end();
    } else if(req.url === "/about") {
        path += "about.html";
        res.statusCode = 200;
    } else if(req.url === "/about-me") {
        res.statusCode = 301;
        res.setHeader("Location", "/about");
        res.end();
    } else {
        path += "404.html";
        res.statusCode = 404;
    }

    // res.write(`<h1>Page Heading</h1>`);
    // res.write(`<p>This is the respond from local server.</p>`);
    // res.end();

    //sending a html file as response
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        }
        // res.write(data);
        res.end(data);
    });
});

server.listen(3000, "localhost", () => {
    console.log("listening for requests on port 3000");
});

