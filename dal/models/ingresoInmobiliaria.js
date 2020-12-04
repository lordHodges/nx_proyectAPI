"use strict";
const{ Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class IngresoInmobiliaria extends Model{

        static associate(models){
            IngresoInmobiliaria.belongsTo(models.Sucursal, {
                foreignKey: "idSucursal",
            });
            IngresoInmobiliaria.belongsTo(models.Usuario, {
                foreignKey: "idUsuario",
            });
            IngresoInmobiliaria.hasMany(models.RespaldoIngresoInmobiliaria, {
                foreignKey: "idIngreso",
            });
        }
    }
    // Agregar Campos
IngresoInmobiliaria.init(
    {
        propiedad: DataTypes.STRING,
        fecha: DataTypes.STRING,
        monto: DataTypes.INTEGER,
        tipoIngreso: DataTypes.STRING,
        descripcionIngreso: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: "IngresoInmobiliaria",
        tableName: "IngresoInmobiliaria"
    }
);
    return IngresoInmobiliaria;
};