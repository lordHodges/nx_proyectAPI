"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class CostoLubricentro extends Model {
        static associate(models){
            CostoLubricentro.belongsTo(models.Sucursal, {
                foreignKey: "idSucursal",
            });
            CostoLubricentro.belongsTo(models.Usuario, {
                foreignKey: "idUsuario",
            });
            CostoLubricentro.hasMany(models.RespaldoCostoLubricentro, {
                foreignKey: "idCosto",
            });
            CostoLubricentro.belongsTo(models.IngresoLubricentro, {
                foreignKey: "idIngreso",
            });
            CostoLubricentro.belongsTo(models.EgresoLubricentro, {
                foreignKey: "idEgreso",
            });
        }
    }
    CostoLubricentro.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
    },
    {
        sequelize,
        modelName: "CostoLubricentro",
        tableName: "CostoLubricentro",
    }
    );
    return CostoLubricentro;
}