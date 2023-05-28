const router = require("express").Router();
const { Blog, Comment } = require("../models");

router.get("/create", (req, res) => {
  try {
    res.render("create");
  } catch (err) {
    console.log({ blogCreateERROR: err });

    res.json(err);
  }
});

router.get("/preview/:id", async (req, res) => {
  try {
    let preview = await Blog.findOne({
      where: {
        id: req.params.id,
      },
      include: [Comment],
    });
    preview = preview.get({ plain: true });
    const owner = () => preview.username == req.session.username;
    console.log(`The post id is: ${req.params.id}
    username: ${req.session.username}
    owner: ${preview.username}
      `);

    res.render("preview", {
      title: preview.title,
      content: preview.content,
      comments: preview.comments.reverse(),
      id: req.params.id,
      owner: owner,
      loggedIn: req.session.logged,
      username: req.session.username,
    });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
