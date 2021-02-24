"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class MovimientosCuentas extends Model {
        static associate(models) {
            MovimientosCuentas.belongsTo(models.CuentasRegistradas, {
                foreignKey: "idcuenta",
            });
            MovimientosCuentas.hasMany(models.RespaldoIngreso, {
                foreignKey: "idMovimiento",
            });
            MovimientosCuentas.hasMany(models.RespaldoEgreso, {
                foreignKey: "idMovimiento",
            });
        }
    }
    MovimientosCuentas.init(
        {
            fecha: DataTypes.STRING,
            monto: DataTypes.INTEGER,
            tipo: DataTypes.STRING,
            saldoAnterior: DataTypes.INTEGER,
            saldoActual: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "MovimientosCuentas",
            tableName: "MovimientosCuentas",
        }
    );
    return MovimientosCuentas;
};
