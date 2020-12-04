"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Sucursal extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Sucursal.belongsTo(models.Empresa, {
				foreignKey: "idEmpresa",
			});
			Sucursal.hasMany(models.IngresoHostal, {
				foreignKey: "idSucursal",
			});
			Sucursal.hasMany(models.EgresoHostal, {
				foreignKey: "idSucursal",
			});
			Sucursal.hasMany(models.EgresoLubricentro, {
				foreignKey: "idSucursal",
			});
			Sucursal.hasMany(models.IngresoLubricentro,{
				foreignKey: "idSucursal",
			});
			Sucursal.hasMany(models.ContratoClienteAbogado, {
				foreignKey: "idSucursal",
			});
			Sucursal.hasMany(models.EgresoFirma, {
				foreignKey: "idSucursal",
			});
			Sucursal.hasMany(models.CostoLubricentro, {
				foreignKey: "idSucursal",
			});
			Sucursal.hasMany(models.IngresoInmobiliaria, {
				foreignKey: "idSucursal",
			});
			Sucursal.hasMany(models.EgresoInmobiliaria, {
				foreignKey: "idSucursal",
			});
		}
	}
	Sucursal.init(
		{
			razonSocial: DataTypes.STRING,
			rut: DataTypes.STRING,
			descripcion: DataTypes.STRING,
			giro: DataTypes.STRING,
			actividad: DataTypes.STRING,
			direccion: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Sucursal",
			tableName: "Sucursal",
		}
	);
	return Sucursal;
};
