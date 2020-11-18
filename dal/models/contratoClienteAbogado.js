"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class ContratoClienteAbogado extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			ContratoClienteAbogado.belongsTo(models.Sucursal, {
				foreignKey: "idSucursal",
			});
			ContratoClienteAbogado.belongsTo(models.Usuario, {
				foreignKey: "idUsuario",
			});
			ContratoClienteAbogado.belongsTo(models.Cliente, {
				foreignKey: "idCliente",
			});
			ContratoClienteAbogado.hasMany(models.Causa, {
				foreignKey: "idContrato",
			});
			ContratoClienteAbogado.hasMany(models.CuotasContrato, {
				foreignKey: "idContrato",
			});
		}
	}
	ContratoClienteAbogado.init(
		{
			nContrato: DataTypes.STRING,
			estadoPago: DataTypes.STRING,
			montoContrato: DataTypes.INTEGER,
			saldoPendiente: DataTypes.INTEGER,
			fechaContrato: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "ContratoClienteAbogado",
			tableName: "ContratoClienteAbogado",
		}
	);
	return ContratoClienteAbogado;
};
