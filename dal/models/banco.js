"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Banco extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Banco.belongsToMany(models.ProyectoAgrofirma, {
				through: "CuentasProyecto",
				foreignKey: "idBanco",
			});
			Banco.belongsToMany(models.Cliente, {
				through: "CuentasCliente",
				foreignKey: "idBanco",
			});
			Banco.hasMany(models.CuentasProyecto, {
				foreignKey: "idBanco",
			});
			Banco.hasMany(models.CuentasRegistradas, {
				foreignKey: "idBanco",
			});
		}
	}
	Banco.init(
		{
			NombreInstitucion: DataTypes.STRING,
		},

		{
			sequelize,

			modelName: "Banco",
			tableName: "Banco",
		}
	);
	return Banco;
};
