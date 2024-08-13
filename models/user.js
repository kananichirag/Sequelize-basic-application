"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );

  // One to One
  User.associate = function (models) {
    User.hasOne(models.Address, {
      foreignKey: "userId",
      as: "address",
    });

    // One to Many
    User.hasMany(models.Post, {
      foreignKey: "userId",
      as: "post",
    });
  };

  return User;
};
