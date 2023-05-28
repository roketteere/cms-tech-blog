const router = require("express").Router();
const { Comment } = require("../../models");

router.post("/add", async (req, res) => {
  try {
    let newComment;
    newComment = await Comment.create({
      postId: req.body.id,
      username: req.body.username,
      comment: req.body.comment,
    });
    if (newComment) {
      res.status(200).json({ comment: "Comment Added!" });
    } else {
      res.status(400).json({ commentERROR: "Oh No an error!" });
    }
  } catch (err) {
    console.log(`ADDING COMMENT ERROR: ${err}`);
    res.status(400).json({ commentERROR: err });
  }
});

module.exports = router;
