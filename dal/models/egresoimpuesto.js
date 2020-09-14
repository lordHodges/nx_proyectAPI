"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EgresoImpuesto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EgresoImpuesto.belongsTo(models.Sucursal, {
        foreignKey: "idSucursal",
      });
      EgresoImpuesto.belongsTo(models.Usuario, {
        foreignKey: "idUsuario",
      });
    }
  }
  EgresoImpuesto.init(
    {
      fecha: DataTypes.STRING,
      monto: DataTypes.INTEGER,
      descripcion: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "EgresoImpuesto",
    }
  );
  return EgresoImpuesto;
};
