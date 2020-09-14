"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EgresoGasto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EgresoGasto.belongsTo(models.Sucursal, {
        foreignKey: "idSucursal",
      });
      EgresoGasto.belongsTo(models.Usuario, {
        foreignKey: "idUsuario",
      });
    }
  }
  EgresoGasto.init(
    {
      fecha: DataTypes.STRING,
      monto: DataTypes.INTEGER,
      descripcion: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "EgresoGasto",
    }
  );
  return EgresoGasto;
};
