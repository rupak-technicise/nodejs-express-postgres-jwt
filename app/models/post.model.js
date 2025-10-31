module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("posts", {
    content: {
      type: Sequelize.STRING,
      allowNull: false
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });
  return Post;
};