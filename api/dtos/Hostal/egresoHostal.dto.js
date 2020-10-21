const RespaldoEgresoDto = require("../");

class EgresoHostalDto {
  id = 0;
  tipoEgreso = "";
  fecha = "";
  monto = 0;
  responsable = "";
  descripcion = "";
  idSucursal = 0;
  idUsuario = 0;
  respaldoEgresos = [RespaldoEgresoDto];
}
module.exports = EgresoHostalDto;
