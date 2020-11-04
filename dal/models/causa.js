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
			Causa.belongsTo(models.Sucursal, {
				foreignKey: "idSucursal",
			});
			Causa.belongsTo(models.Usuario, {
				foreignKey: "idUsuario",
			});
			Causa.belongsTo(models.Cliente, {
				foreignKey: "idCliente",
			});
			Causa.belongsToMany(models.Abogado, {
				through: models.Equipo,
				foreignKey: "idCausa",
			});
			Causa.hasMany(models.CuotasCausa, {
				foreignKey: "idCausa",
			});
		}
	}
	Causa.init(
		{
			codigo: DataTypes.STRING,
			titulo: DataTypes.STRING,
			materia: DataTypes.STRING,
			estado: DataTypes.STRING,
			montoCausa: DataTypes.INTEGER,
			saldoPendiente: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Causa",
			tableName: "Causa",
		}
	);
	return Causa;
};
