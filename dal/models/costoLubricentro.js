"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class CostoLubricentro extends Model {
        static associate(models){
            CostoLubricentro.belongsTo(models.Sucursal, {
                foreignKey: "idSucursal",
            });
            CostoLubricentro.belongsTo(models.Usuario,{
                foreignKey: "idUsuario",
            });
            CostoLubricentro.hasMany(models.RespaldoCostoLubricentro, {
                foreignKey: "idCosto",
            });
        }
    }
    CostoLubricentro.init(
    {
        tipoCosto:DataTypes.STRING,
        fecha: DataTypes.STRING,
        monto: DataTypes.INTEGER,
        responsable: DataTypes.STRING,
        descripcion: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: "CostoLubricentro",
        tableName: "CostoLubricentro",
    }
    );
}