"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class RespaldoCostoLubricentro extends Model {
        static associate(models) {
            RespaldoCostoLubricentro.belongsTo(models.CostoLubricentro, {
                foreignKey: "idCosto"
            });
        }
    }
    RespaldoCostoLubricentro.init(
        {
            url: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "RespaldoCostoLubricentro",
            tableName: "RespaldoCostoLubricentro",
        }
    );
    return RespaldoCostoLubricentro;
}