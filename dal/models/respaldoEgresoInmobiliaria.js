"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RespaldoEgresoInmobiliaria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      RespaldoEgresoInmobiliaria.belongsTo(models.EgresoInmobiliaria, {
        foreignKey: "idEgreso"
      });
    }
  }
  RespaldoEgresoInmobiliaria.init(
    {
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "RespaldoEgresoInmobiliaria",
      tableName: "RespaldoEgresoInmobiliaria",
    }
  );
  return RespaldoEgresoInmobiliaria;
};