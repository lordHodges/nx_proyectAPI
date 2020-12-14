"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Cliente extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Cliente.belongsTo(models.Usuario, {
				foreignKey: "idUsuario",
			});
			Cliente.hasMany(models.ContratoClienteAbogado, {
				foreignKey: "idCliente",
			});
			Cliente.belongsToMany(models.Banco, {
				through: "CuentasCliente",
				foreignKey: "idCliente",
			});
		}
	}
	Cliente.init(
		{
			rut: DataTypes.STRING,
			nombre: DataTypes.STRING,
			fono: DataTypes.STRING,
			email: DataTypes.STRING,
			direccion: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Cliente",
			tableName: "Cliente",
		}
	);
	return Cliente;
};
