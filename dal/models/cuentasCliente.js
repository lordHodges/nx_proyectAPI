"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class CuentasCliente extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {}
	}
	CuentasCliente.init(
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
			modelName: "CuentasCliente",
			tableName: "CuentasCliente",
		}
	);
	return CuentasCliente;
};
