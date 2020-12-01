const Sucursal = require("./sucursal");
const mapper = require("automapper-js");

class Empresa {
  id = 0;
  razonSocial = null;
  rut = null;
  descripcion = null;
  giro = null;
  actividad = null;
  direccion = null;
  //atributo solo existe en dominio
  Sucursals = [Sucursal];
}
module.exports = Empresa;
