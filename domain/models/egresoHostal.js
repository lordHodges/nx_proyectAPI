const RespaldoEgreso = require("./respaldoEgreso");

class EgresoHostal {
  id = 0;
  tipoEgreso = null;
  fecha = null;
  monto = 0;
  responsable = null;
  descripcion = null;
  idSucursal = 0;
  idUsuario = 0;
  respaldoEgresos = [RespaldoEgreso];
}
module.exports = EgresoHostal;
