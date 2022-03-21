const express = require("express");
const {allBlogs, newBlog, blogDetails, deleteBlog} = require("../controllers/blogControllers.js");

const router = express.Router();

router.get("/", allBlogs);

router.post("/", newBlog);

router.get("/:id", blogDetails);

router.delete("/:id", deleteBlog);

module.exports = router;

