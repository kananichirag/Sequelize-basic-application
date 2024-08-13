"use strict";

module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define("Address", {
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Address.associate = function (models) {
    Address.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });
  };

  return Address;
};
