"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ingreso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ingreso.belongsTo(models.Sucursal, {
        foreignKey: "idSucursal",
      });
      Ingreso.belongsTo(models.Usuario, {
        foreignKey: "idUsuario",
      });
    }
  }
  Ingreso.init(
    {
      fecha: DataTypes.STRING,
      monto: DataTypes.INTEGER,
      descripcion: DataTypes.STRING,
      estadoPago: DataTypes.STRING,
      tipoPago: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "Ingresos",
      modelName: "Ingreso",
    }
  );
  return Ingreso;
};
