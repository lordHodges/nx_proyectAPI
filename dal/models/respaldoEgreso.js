"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RespaldoEgreso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RespaldoEgreso.belongsTo(models.EgresoHostal, {
        foreignKey: "idEgreso",
      });
    }
  }
  RespaldoEgreso.init(
    {
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "RespaldoEgreso",
      tableName: "RespaldoEgreso",
    }
  );
  return RespaldoEgreso;
};