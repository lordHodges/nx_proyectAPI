"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RespaldoEgresoLubricentro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RespaldoEgresoLubricentro.belongsTo(models.EgresoLubricentro, {
        foreignKey: "idEgreso"
      });
    }
  }
  RespaldoEgresoLubricentro.init(
    {
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "RespaldoEgresoLubricentro",
      tableName: "RespaldoEgresoLubricentro",
    }
  );
  return RespaldoEgresoLubricentro;
};