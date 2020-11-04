"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CuotasCausa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CuotasCausa.belongsTo(models.Usuario, {
        foreignKey: "idUsuario",
      });
      CuotasCausa.belongsTo(models.Causa, {
        foreignKey: "idCausa",
      });
    }
  }
  CuotasCausa.init(
    {
      fechaPago: DataTypes.STRING,
      montoCuota: DataTypes.INTEGER,
      estado: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CuotasCausa",
      tableName: "CuotasCausa",
    }
  );
  return CuotasCausa;
};
