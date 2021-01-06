"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class EgresoRentacar extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			EgresoRentacar.belongsTo(models.Sucursal, {
				foreignKey: "idSucursal",
			});
			EgresoRentacar.belongsTo(models.Usuario, {
				foreignKey: "idUsuario",
			});
			EgresoRentacar.hasMany(models.RespaldoEgreso, {
				foreignKey: "idEgresoRentacar",
			});
		}
	}
	EgresoRentacar.init(
		{
			tipoEgreso: DataTypes.STRING,
			fecha: DataTypes.STRING,
			monto: DataTypes.INTEGER,
			responsable: DataTypes.STRING,
			descripcion: DataTypes.STRING,
			idArriendo: { type: DataTypes.INTEGER, allowNull: true },
		},
		{
			sequelize,
			modelName: "EgresoRentacar",
			tableName: "EgresoRentacar",
		}
	);
	return EgresoRentacar;
};
