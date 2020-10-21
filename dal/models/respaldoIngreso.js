"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RespaldoIngreso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RespaldoIngreso.belongsTo(models.IngresoHostal, {
        foreignKey: "idIngreso",
      });
    }
  }
  RespaldoIngreso.init(
    {
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "RespaldoIngreso",
      tableName: "RespaldoIngreso",
    }
  );
  return RespaldoIngreso;
};
