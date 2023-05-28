const router = require("express").Router();
const { User } = require("../../models");

router.post("/signup", async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    if (newUser) {
      await new Promise((resolve, reject) => {
        try {
          req.session.save(() => {
            req.session.logged = true;
            req.session.username = req.body.username;
            resolve();
          });
        } catch (err) {
          reject(err);
          res.status(400).redirect("/");
        }
      });
    } else {
      res.redirect("/");
    }
  } catch (err) {
    if (err.errors[0].type == "unique violation") {
      res.json({ user: "User Already Exists! ", body: req.body.username });
    }
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    const userData = user.get({ plain: true });
    if (!user.checkPassword(req.body.password)) {
      res.json({ message: "Invalid Password" });
    } else {
      await new Promise((resolve, reject) => {
        try {
          req.session.save(() => {
            req.session.logged = true;
            req.session.username = user.username;
            resolve();
            res.redirect("/user/dashboard");
          });
        } catch (err) {
          reject(err);
        }
      });
    }
  } catch (err) {
    console.log(`
    
    Error Message ${err}
    
    =================================
    body:
    ${req.body}
    `);

    res.json({
      message: err,
      um: "DUnno what happened",
    });
  }
});

router.get("/logout", (req, res) => {
  try {
    req.session.destroy(() => {
      req.session;
      return res.redirect("/");
    });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
