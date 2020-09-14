"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EgresoBancario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EgresoBancario.belongsTo(models.Sucursal, {
        foreignKey: "idSucursal",
      });
      EgresoBancario.belongsTo(models.Usuario, {
        foreignKey: "idUsuario",
      });
    }
  }
  EgresoBancario.init(
    {
      fecha: DataTypes.STRING,
      monto: DataTypes.INTEGER,
      descripcion: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "EgresoBancarios",
      modelName: "EgresoBancario",
    }
  );
  return EgresoBancario;
};
