"use strict";
const{ Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class IngresoLubricentro extends Model{

        static associate(models){
            IngresoLubricentro.belongsTo(models.Sucursal, {
                foreignKey: "idSucursal",
            });
            IngresoLubricentro.belongsTo(models.Usuario, {
                foreignKey: "idUsuario",
            });
            IngresoLubricentro.hasMany(models.RespaldoIngresoLubricentro, {
                foreignKey: "idIngreso",
            });
            IngresoLubricentro.hasMany(models.CostoLubricentro, {
                foreignKey: "idCosto",
            });
        }
    }
    // Agregar Campos
IngresoLubricentro.init(
    {
        fecha: DataTypes.STRING,
        monto: DataTypes.INTEGER,
        nDocumento: DataTypes.STRING,
        tipoCliente: DataTypes.STRING,
        cliente: DataTypes.STRING,
        tipoIngreso: DataTypes.STRING,
        descripcionIngreso: DataTypes.STRING,
        estadoPago:DataTypes.STRING,
        telefono:DataTypes.STRING,
        correo:DataTypes.STRING,
        tipoVehiculo:DataTypes.STRING,
        referenciaCliente:DataTypes.STRING,
        ppu:DataTypes.STRING,
        marca:DataTypes.STRING,
        modelo:DataTypes.STRING,
        nAutorizacion:DataTypes.STRING,
        anio:DataTypes.INTEGER,
        kmActual:DataTypes.INTEGER,
        kmProximo:DataTypes.STRING,
        //
    },
    {
        sequelize,
        modelName: "IngresoLubricentro",
        tableName: "IngresoLubricentro"
    }
);
    return IngresoLubricentro;
};