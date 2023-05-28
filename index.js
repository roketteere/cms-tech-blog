const express = require("express");
const session = require("express-session");
const routes = require("./controllers");
const exphbs = require("express-handlebars");
const { sequelize } = require("./db");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const path = require("path");
require("dotenv").config();

// create app and port
const app = express();
const PORT = process.env.PORT || 3001;

// session config
const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 2,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sessionConfig));

// import middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Engine configuration
// Set up the Handlebars engine
app.engine(
  "hbs",
  exphbs.engine({
    extname: ".hbs",
    layoutsDir: __dirname + "/views/layouts",
    defaultLayout: "index",
  })
);
app.set("view engine", "hbs");

// serve static files & routes
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

// connect to db before server then start server inside
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Running on port ${PORT}`));
});
