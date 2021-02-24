"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class RespaldoEgreso extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			RespaldoEgreso.belongsTo(models.EgresoHostal, {
				foreignKey: "idEgreso",
			});
			RespaldoEgreso.belongsTo(models.EgresoFirma, {
				foreignKey: "idEgresoFirma",
			});
			RespaldoEgreso.belongsTo(models.EgresoRentacar, {
				foreignKey: "idEgresoRentacar",
			});
			RespaldoEgreso.belongsTo(models.EgresoAgrofirma, {
				foreignKey: "idEgresoAgrofirma",
			});
			RespaldoEgreso.belongsTo(models.MovimientosCuentas, {
				foreignKey: "idMovimiento",
			});
		}
	}
	RespaldoEgreso.init(
		{
			url: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "RespaldoEgreso",
			tableName: "RespaldoEgreso",
		}
	);
	return RespaldoEgreso;
};
