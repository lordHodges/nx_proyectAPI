"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class CuentasProyecto extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			CuentasProyecto.hasMany(models.IngresoAgrofirma, {
				foreignKey: "idCuentaProyecto",
			});
			CuentasProyecto.belongsTo(models.ProyectoAgrofirma, {
				foreignKey: "idProyecto",
			});
			CuentasProyecto.belongsTo(models.Banco, {
				foreignKey: "idBanco",
			});
		}
	}
	CuentasProyecto.init(
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
			modelName: "CuentasProyecto",
			tableName: "CuentasProyecto",
		}
	);
	return CuentasProyecto;
};
