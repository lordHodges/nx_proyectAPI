"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.belongsTo(models.Rol, {
        foreignKey: "RolID",
      });
      Usuario.hasMany(models.Ingreso, {
        foreignKey: "idUsuario",
      });
      Usuario.hasMany(models.EgresoBancario, {
        foreignKey: "idUsuario",
      });
      Usuario.hasMany(models.EgresoCosto, {
        foreignKey: "idUsuario",
      });
      Usuario.hasMany(models.EgresoGasto, {
        foreignKey: "idUsuario",
      });
      Usuario.hasMany(models.EgresoImpuesto, {
        foreignKey: "idUsuario",
      });
      Usuario.hasMany(models.EgresoRemuneracion, {
        foreignKey: "idUsuario",
      });
    }
  }
  Usuario.init(
    {
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      nombreUsuario: DataTypes.STRING,
      hash: DataTypes.STRING,
      RolID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Usuario",
    }
  );
  return Usuario;
};
