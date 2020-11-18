"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class IngresoHostal extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			IngresoHostal.belongsTo(models.Sucursal, {
				foreignKey: "idSucursal",
			});
			IngresoHostal.belongsTo(models.Usuario, {
				foreignKey: "idUsuario",
			});
			IngresoHostal.hasMany(models.RespaldoIngreso, {
				foreignKey: "idIngreso",
			});
		}
	}
	IngresoHostal.init(
		{
			fecha: DataTypes.STRING,
			monto: DataTypes.INTEGER,
			tipoPago: DataTypes.STRING,
			nDocumento: DataTypes.STRING,
			cliente: DataTypes.STRING,
			tipoCliente: DataTypes.STRING,
			descripcionIngreso: DataTypes.STRING,
			tipoIngreso: DataTypes.STRING,
			estadoPago: DataTypes.STRING,
			banco: DataTypes.STRING,
			nAutorizacion: DataTypes.STRING,
			referenciaCliente: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "IngresoHostal",
			tableName: "IngresoHostal",
		}
	);
	return IngresoHostal;
};
