"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class EgresoFirma extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			EgresoFirma.belongsTo(models.Sucursal, {
				foreignKey: "idSucursal",
			});
			EgresoFirma.belongsTo(models.Usuario, {
				foreignKey: "idUsuario",
			});
			EgresoFirma.hasMany(models.RespaldoEgreso, {
				foreignKey: "idEgresoFirma",
			});
		}
	}
	EgresoFirma.init(
		{
			tipoEgreso: DataTypes.STRING,
			fecha: DataTypes.STRING,
			monto: DataTypes.INTEGER,
			responsable: DataTypes.STRING,
			descripcion: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "EgresoFirma",
			tableName: "EgresoFirma",
		}
	);
	return EgresoFirma;
};
