const UsuarioDto = require("../usuario.dto");
const SucursalDto = require("../sucursal/sucursal.dto");

class IngresoHostalDto {
  id = 0;
  fecha = "";
  monto = 0;
  estadoPago = "";
  tipoPago = "";
  tipoCliente = "";
  cliente = "";
  tipoIngreso = "";
  idSucursal = 0;
  idUsuario = 0;
  Usuario = [UsuarioDto];
  Sucursal = [SucursalDto];

  createdAt = "";
  updatedAt = "";
}
module.exports = IngresoHostalDto;
