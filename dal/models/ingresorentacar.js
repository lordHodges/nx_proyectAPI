'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IngresoRentacar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  IngresoRentacar.init({
    fecha: DataTypes.STRING,
    monto: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    ppu: DataTypes.STRING,
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    cantidadDias: DataTypes.INTEGER,
    empresaCopago: DataTypes.STRING,
    cliente: DataTypes.STRING,
    esCopago: DataTypes.STRING,
    idSucursal: DataTypes.INTEGER,
    idProyecto: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'IngresoRentacar',
  });
  return IngresoRentacar;
};