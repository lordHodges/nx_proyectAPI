"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EgresoRemuneracion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EgresoRemuneracion.belongsTo(models.Sucursal, {
        foreignKey: "idSucursal",
      });
      EgresoRemuneracion.belongsTo(models.Usuario, {
        foreignKey: "idUsuario",
      });
    }
  }
  EgresoRemuneracion.init(
    {
      fecha: DataTypes.STRING,
      monto: DataTypes.INTEGER,
      descripcion: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "EgresoRemuneraciones",
      modelName: "EgresoRemuneracion",
    }
  );
  return EgresoRemuneracion;
};
