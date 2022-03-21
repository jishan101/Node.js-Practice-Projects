const Blog = require("../models/blogModel");

const allBlogs = (req, res) => {
    Blog.find().sort({createdAt: -1})
        .then(result => {
            res.render("index.ejs", {title: "Home", blogs: result});
        })
        .catch(err => {
            console.log(err);
        });
};

const newBlog = (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then(result => {
            res.redirect("/blogs");
        })
        .catch(err => {
            console.log(err)
        });
};

const blogDetails = (req, res) => {
    const id = req.params.id;

    Blog.findById(id)
        .then(result => {
            if(result) {
                res.render("blogDetails", {title: result.title, blog: result});
            } else {
                res.redirect("/blogs");
            }
        })
        .catch(err => {
            console.log(err);
        });
};

const deleteBlog = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({redirect: "/blogs"});
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports = {allBlogs, newBlog, blogDetails, deleteBlog};

