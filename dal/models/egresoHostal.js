"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EgresoHostal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EgresoHostal.belongsTo(models.Sucursal, {
        foreignKey: "idSucursal",
      });
      EgresoHostal.belongsTo(models.Usuario, {
        foreignKey: "idUsuario",
      });
      EgresoHostal.hasMany(models.RespaldoEgreso, {
        foreignKey: "idEgreso",
      });
    }
  }
  EgresoHostal.init(
    {
      tipoEgreso: DataTypes.STRING,
      fecha: DataTypes.STRING,
      monto: DataTypes.INTEGER,
      responsable: DataTypes.STRING,
      descripcion: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "EgresoHostal",
      tableName: "EgresoHostal",
    }
  );
  return EgresoHostal;
};
