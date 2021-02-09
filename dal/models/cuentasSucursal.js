"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class CuentasSucursal extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			/* CuentasSucursal.hasMany(models.IngresoHostal, {
				foreignKey: "idCuentaProyecto",
			}); */
			CuentasSucursal.belongsTo(models.Sucursal, {
				foreignKey: "idSucursal",
			});
			CuentasSucursal.belongsTo(models.Banco, {
				foreignKey: "idBanco",
			});
		}
	}
	CuentasSucursal.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			numeroCuenta: DataTypes.STRING,
			tipoCuenta: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "CuentasSucursal",
			tableName: "CuentasSucursal",
		}
	);
	return CuentasSucursal;
};
