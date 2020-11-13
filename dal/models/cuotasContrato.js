"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class CuotasContrato extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			CuotasContrato.belongsTo(models.Usuario, {
				foreignKey: "idUsuario",
			});
			CuotasContrato.belongsTo(models.ContratoClienteAbogado, {
				foreignKey: "idContrato",
			});
		}
	}
	CuotasContrato.init(
		{
			fechaPago: DataTypes.STRING,
			montoCuota: DataTypes.INTEGER,
			estado: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "CuotasContrato",
			tableName: "CuotasContrato",
		}
	);
	return CuotasContrato;
};
