const Blog = require("../models/blog.js");

const allBlogs = (req, res) => {
    Blog.find().sort({createdAt: -1})
        .then(result => res.render("index", {title: "Home | Blogs", blogs: result}))
        .catch(err => console.log(err));
};

const createBlog = (req, res) => {
    const blog = new Blog(req.body);
    
    blog.save()
        .then(result => res.redirect("/blogs"))
        .catch(err => console.log(err));
};

const blogDetails = (req, res) => {
    const id = req.params.id;

    Blog.findById(id)
        .then(result => {
            if(result) {
                res.render("single-blog", {title: result.title, blog: result});
            }else {
                res.redirect("/blogs");
            }
        })
        .catch(err => console.log(err));
};

const deleteBlog = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => res.json({redirect: "/blogs"}))
        .catch(err => console.log(err));
};

const updateBlogPage = (req, res) => {
    const id = req.params.id;

    Blog.findById(id)
        .then(result => res.render("update-blog", {title: "Update Blog", blog: result}))
        .catch(err => console.log(err));
};

const updateBlog = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndUpdate(id, req.body)
        .then(result => res.redirect("/blogs"))
        .catch(err => console.log(err));
};

module.exports = {allBlogs, createBlog, blogDetails, deleteBlog, updateBlogPage, updateBlog};

