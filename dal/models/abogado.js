"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Abogado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Abogado.belongsTo(models.Sucursal, {
        foreignKey: "idSucursal",
      });
      Abogado.belongsTo(models.Usuario, {
        foreignKey: "idUsuario",
      });
      Abogado.belongsToMany(models.Causa, {
        through: models.Equipo,
        foreignKey: "idAbogado",
      });
    }
  }
  Abogado.init(
    {
      run: DataTypes.STRING,
      nombre: DataTypes.STRING,
      correo: DataTypes.STRING,
      fono: DataTypes.STRING,
      contacto: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Abogado",
      tableName: "Abogado",
    }
  );
  return Abogado;
};
