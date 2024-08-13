module.exports = (sequelize, DataTypes) => {
  const Working = sequelize.define("Working", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    weekDay: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    workingDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    isWorking: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Working.associate = function (models) {
    Working.belongsTo(models.Company, {
      ForeignKey: "companyId",
      as: "company",
    });
  };

  return Working;
};
