const Ingreso = require("./ingreso");
const Usuario = require("../usuario");
const Sucursal = require("../sucursal");

class IngresoHostal extends Ingreso {
  tipoCliente = null;
  cliente = null;
  tipoIngreso = null;
  Sucursal = [Sucursal];
  Usuario = [Usuario];
}
module.exports = IngresoHostal;
