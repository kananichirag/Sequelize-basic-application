"use strict";

module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define("Employee", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Employee.associate = function (models) {
    Employee.belongsTo(models.Company, {
      foreignKey: "companyId",
      as: "company",
    });
  };

  return Employee;
};
