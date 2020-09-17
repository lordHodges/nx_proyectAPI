"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sucursal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sucursal.hasMany(models.Ingreso, {
        foreignKey: "idSucursal",
      });
      Sucursal.hasMany(models.EgresoBancario, {
        foreignKey: "idSucursal",
      });
      Sucursal.hasMany(models.EgresoCosto, {
        foreignKey: "idSucursal",
      });
      Sucursal.hasMany(models.EgresoGasto, {
        foreignKey: "idSucursal",
      });
      Sucursal.hasMany(models.EgresoImpuesto, {
        foreignKey: "idSucursal",
      });
      Sucursal.hasMany(models.EgresoRemuneracion, {
        foreignKey: "idSucursal",
      });

      Sucursal.belongsTo(models.Empresa, {
        foreignKey: "idEmpresa",
      });
    }
  }
  Sucursal.init(
    {
      razonSocial: DataTypes.STRING,
      rut: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      giro: DataTypes.STRING,
      actividad: DataTypes.STRING,
      direccion: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Sucursal",
    }
  );
  return Sucursal;
};
