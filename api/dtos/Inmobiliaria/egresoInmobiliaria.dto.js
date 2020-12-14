const RespaldoEgresoDto = require("../");

class EgresoInmobiliariaDto {
  id = 0;
  tipoEgreso = "";
  fecha = "";
  monto = 0;
  responsable = "";
  descripcion = "";
  idSucursal = 0;
  idUsuario = 0;
  RespaldoEgresos = [RespaldoEgresoDto];
}
module.exports = EgresoInmobiliariaDto;