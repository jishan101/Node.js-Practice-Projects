const express = require("express");
const blogControllers = require("../controllers/blog-controllers");

const router = express.Router();

router.get("/", blogControllers.allBlogs);

//post req
router.post("/", blogControllers.createBlog);

//req for showing a single blog in details
router.get("/:id", blogControllers.blogDetails);

//deleting a blog
router.delete("/:id", blogControllers.deleteBlog);

//going to blog update page
router.get("/update/:id", blogControllers.updateBlogPage);

//updating a blog
router.post("/:id", blogControllers.updateBlog);

module.exports = router;

