"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Usuario extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Usuario.belongsTo(models.Rol, {
				foreignKey: "RolID",
			});
			Usuario.hasMany(models.IngresoHostal, {
				foreignKey: "idUsuario",
			});
			Usuario.hasMany(models.EgresoHostal, {
				foreignKey: "idUsuario",
			});
			Usuario.hasMany(models.IngresoLubricentro, {
				foreignKey: "idUsuario",
			});
			Usuario.hasMany(models.EgresoLubricentro, {
				foreignKey: "idUsuario",
			});
			Usuario.hasMany(models.Abogado, {
				foreignKey: "idUsuario",
			});
			Usuario.hasMany(models.Causa, {
				foreignKey: "idUsuario",
			});
			Usuario.hasMany(models.Cliente, {
				foreignKey: "idUsuario",
			});
			Usuario.hasMany(models.CuotasContrato, {
				foreignKey: "idUsuario",
			});
			Usuario.hasMany(models.ContratoClienteAbogado, {
				foreignKey: "idUsuario",
			});
			Usuario.hasMany(models.EgresoFirma, {
				foreignKey: "idUsuario",
			});
			Usuario.hasMany(models.CostoLubricentro, {
				foreignKey: "idUsuario",
			});
			Usuario.hasMany(models.IngresoInmobiliaria, {
				foreignKey: "idUsuario",
			});
			Usuario.hasMany(models.EgresoInmobiliaria, {
				foreignKey: "idUsuario",
			});
		}
	}
	Usuario.init(
		{
			nombre: DataTypes.STRING,
			apellido: DataTypes.STRING,
			nombreUsuario: DataTypes.STRING,
			hash: DataTypes.STRING,
			RolID: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Usuario",
		}
	);
	return Usuario;
};
