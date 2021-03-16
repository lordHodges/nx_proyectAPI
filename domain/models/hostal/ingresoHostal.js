const ResoaldoIngreso = require("./respaldoEgreso");

class IngresoHostal {
  id = 0;
  tipoIngreso = null;
  fecha = null;
  monto = 0;
  tipoCliente = null;
  cliente = null;
  idSucursal = 0;
  idUsuario = 0;
  idCunetaAsignada = 0;
  respaldoEgresos = [ResoaldoIngreso];
}
module.exports = IngresoHostal;
