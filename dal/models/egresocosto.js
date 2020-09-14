"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EgresoCosto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EgresoCosto.belongsTo(models.Sucursal, {
        foreignKey: "idSucursal",
      });
      EgresoCosto.belongsTo(models.Usuario, {
        foreignKey: "idUsuario",
      });
    }
  }
  EgresoCosto.init(
    {
      fecha: DataTypes.STRING,
      monto: DataTypes.INTEGER,
      descripcion: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "EgresoCosto",
    }
  );
  return EgresoCosto;
};
