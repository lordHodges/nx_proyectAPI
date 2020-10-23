const SucursalDto = require("../../dtos/sucursal/sucursal.dto");
const mapper = require("automapper-js");
class EmpresaDto {
  id = 0;
  razonSocial = "";
  rut = "";
  descripcion = "";
  giro = "";
  actividad = "";
  direccion = "";
  createdAt = "";
  updatedAt = "";
  Sucursals = [SucursalDto];
}
module.exports = EmpresaDto;
