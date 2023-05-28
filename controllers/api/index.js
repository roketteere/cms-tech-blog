const router = require("express").Router();
const blog = require("./blog");
const user = require("./user");
const comment = require("./comment");

router.use("/user", user);
router.use("/blog", blog);
router.use("/comment", comment);

module.exports = router;
