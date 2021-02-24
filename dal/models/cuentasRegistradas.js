"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class CuentasRegistradas extends Model {
		static associate(models) {

			CuentasRegistradas.belongsTo(models.Banco, {
				foreignKey: "idBanco",
			});
			CuentasRegistradas.hasMany(models.MovimientosCuentas, {
				foreignKey: 'idcuenta',
			})
		}

	}
	CuentasRegistradas.init(
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false,
			},
			alias: DataTypes.STRING,
			numeroCuenta: DataTypes.STRING,
			tipoCuenta: DataTypes.STRING,
			saldo: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "CuentasRegistradas",
			tableName: "CuentasRegistradas",
		}
	);
	return CuentasRegistradas;
};
