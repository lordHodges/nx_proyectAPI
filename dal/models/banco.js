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
			/* Banco.belongsTo(models.Usuario, {
				foreignKey: "idUsuario",
			});
			Banco.belongsToMany(models.Causa, {
				through: models.Equipo,
				foreignKey: "idBanco",
			}); */
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
