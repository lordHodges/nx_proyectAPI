"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class IngresoHostal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      IngresoHostal.belongsTo(models.Sucursal, {
        foreignKey: "idSucursal",
      });
      IngresoHostal.belongsTo(models.Usuario, {
        foreignKey: "idUsuario",
      });
      IngresoHostal.hasMany(models.RespaldoIngreso, {
        foreignKey: "idIngreso",
      });
    }
  }
  IngresoHostal.init(
    {
      tipoIngreso: DataTypes.STRING,
      fecha: DataTypes.STRING,
      descripcionIngreso: DataTypes.STRING,
      monto: DataTypes.INTEGER,
      tipoCliente: DataTypes.STRING,
      cliente: DataTypes.STRING,
      tipoPago: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "IngresoHostal",
      tableName: "IngresoHostal",
    }
  );
  return IngresoHostal;
};
