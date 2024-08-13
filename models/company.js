module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define("Company", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Company.associate = function (models) {
    Company.hasMany(models.Employee, {
      foreignKey: "companyId",
      as: "employee",
    });

    Company.hasMany(models.Working, {
      foreignKey: "companyId",
      as: "working",
    });
  };

  return Company;
};
