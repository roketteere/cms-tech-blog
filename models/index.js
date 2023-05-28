const Blog = require("./Blog");
const User = require("./User");
const Comment = require("./Comment");

User.hasMany(Blog, {
  foreignKey: "username",
  onDelete: "CASCADE",
});

Blog.belongsTo(User, {
  foreignKey: "username",
});

Blog.hasMany(Comment, {
  foreignKey: "postId",
});

Comment.belongsTo(User, {
  foreignKey: "id",
});

module.exports = { Blog, User, Comment };
