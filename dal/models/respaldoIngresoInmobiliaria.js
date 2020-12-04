"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RespaldoIngresoInmobiliaria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RespaldoIngresoInmobiliaria.belongsTo(models.IngresoInmobiliaria, {
        foreignKey: "idIngreso",
      });
    }
  }
  RespaldoIngresoInmobiliaria.init(
    {
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "RespaldoIngresoInmobiliaria",
      tableName: "RespaldoIngresoInmobiliaria",
    }
  );
  return RespaldoIngresoInmobiliaria;
};
