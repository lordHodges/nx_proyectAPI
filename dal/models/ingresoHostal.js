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
    }
  }
  IngresoHostal.init(
    {
      fecha: DataTypes.STRING,
      monto: DataTypes.INTEGER,
      estadoPago: DataTypes.STRING,
      tipoPago: DataTypes.STRING,
      tipoCliente: DataTypes.STRING,
      cliente: DataTypes.STRING,
      tipoIngreso: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "IngresosHostal",
      modelName: "IngresoHostal",
    }
  );
  return IngresoHostal;
};
