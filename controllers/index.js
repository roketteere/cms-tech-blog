const router = require("express").Router();
const user = require("./user");
const blog = require("./blog");
const api = require("./api");
const { Blog, Comment } = require("../models");

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.findAll({
      include: [Comment],
    });
    let blg = [];
    blogs.forEach((blog) => {
      blg.push(blog.get({ plain: true }));
    });
    // console.log(blg);
    res.render("home", {
      blogPosts: blg.reverse(),
      username: req.session.username,
      loggedIn: req.session.logged,
    });
  } catch (err) {
    console.log(`Error in the "/" Route:
        ${err}
        ======
        `);

    res.status(400).json(err);
  }
});

router.use("/user", user);
router.use("/blog", blog);
router.use("/api", api);

module.exports = router;
