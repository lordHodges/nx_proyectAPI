"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Causa extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Causa.belongsToMany(models.Abogado, {
				through: models.Equipo,
				foreignKey: "idCausa",
			});

			Causa.belongsTo(models.ContratoClienteAbogado, {
				foreignKey: "idContrato",
			});
			Causa.belongsTo(models.Usuario, {
				foreignKey: "idUsuario",
			});
		}
	}
	Causa.init(
		{
			codigo: DataTypes.STRING,
			titulo: DataTypes.STRING,
			materia: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Causa",
			tableName: "Causa",
		}
	);
	return Causa;
};
