"use strict";

module.exports = (Sequelize, DataTypes) => {
  const Post = Sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Post;
};
