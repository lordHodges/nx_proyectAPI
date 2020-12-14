"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EgresoInmobiliaria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EgresoInmobiliaria.belongsTo(models.Sucursal, {
        foreignKey: "idSucursal",
      });
      EgresoInmobiliaria.belongsTo(models.Usuario, {
        foreignKey: "idUsuario",
      });
      EgresoInmobiliaria.hasMany(models.RespaldoEgresoInmobiliaria, {
        foreignKey: "idEgreso",
      });
    }
  }
  EgresoInmobiliaria.init(
    {
      propiedad: DataTypes.STRING,
      tipoEgreso: DataTypes.STRING,
      fecha: DataTypes.STRING,
      monto: DataTypes.INTEGER,
      responsable: DataTypes.STRING,
      descripcion: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "EgresoInmobiliaria",
      tableName: "EgresoInmobiliaria",
    }
  );
  return EgresoInmobiliaria;
};
