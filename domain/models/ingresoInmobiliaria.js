const ResoaldoIngreso = require("./respaldoEgresoInmobiliaria");
// Agregar campos
class IngresoInmobiliaria {
  id = 0;
  propiedad = null;
  tipoIngreso = null;
  descripcionIngreso = null;
  fecha = null;
  monto = 0;
  idSucursal = 0;
  idUsuario = 0;
  respaldoEgresoInmobiliaria = [ResoaldoIngreso];
}
module.exports = IngresoInmobiliaria;
