const router = require("express").Router();
const { Blog } = require("../models");

router.get("/dashboard", async (req, res) => {
  try {
    let blogs;
    let blg = [];
    if (!req.session.username) {
      return res.redirect("/user/signup");
    } else {
      blogs = await Blog.findAll({
        where: {
          username: req.session.username,
        },
      });
    }
    if (blogs) {
      blogs.forEach((blog) => {
        blg.push(blog.get({ plain: true }));
      });
      res.render("dashboard", {
        username: req.session.username,
        loggedIn: req.session.logged,
        blogPosts: blg.reverse(),
      });
    } else {
      res.redirect("/user/signup");
    }
  } catch (err) {
    console.log(err);

    res.json({ message: `Error Has Happened: ${err}` });
  }
});

router.get("/login", (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/signup", (req, res) => {
  try {
    res.render("signup");
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
