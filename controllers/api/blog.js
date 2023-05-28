const router = require("express").Router();
const { Blog } = require("../../models");

router.post("/create", async (req, res) => {
  try {
    const newBlog = await Blog.create({
      username: req.session.username,
      title: req.body.title,
      content: req.body.content,
    });
    res.redirect("/");
  } catch (err) {
    res.json(err);
  }
});

router.put("/edit", async (req, res) => {
  try {
    let update = await Blog.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    console.log("UDPATE BROOO ROUTE:::" + update);
    res.status(200).json({ message: "Update successful" });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
