"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EgresoLubricentro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EgresoLubricentro.belongsTo(models.Sucursal, {
        foreignKey: "idSucursal",
      });
      EgresoLubricentro.belongsTo(models.Usuario, {
        foreignKey: "idUsuario",
      });
      EgresoLubricentro.hasMany(models.RespaldoEgresoLubricentro, {
        foreignKey: "idEgreso",
      });
    }
  }
  EgresoLubricentro.init(
    {
      tipoEgreso: DataTypes.STRING,
      fecha: DataTypes.STRING,
      monto: DataTypes.INTEGER,
      responsable: DataTypes.STRING,
      descripcion: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "EgresoLubricentro",
      tableName: "EgresoLubricentro",
    }
  );
  return EgresoLubricentro;
};
