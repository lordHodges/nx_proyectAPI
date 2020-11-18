const ResoaldoIngreso = require("./respaldoEgresoLubricentro");
// Agregar campos
class IngresoLubricentro {
  id = 0;
  tipoIngreso = null;
  fecha = null;
  monto = 0;
  tipoCliente = null;
  cliente = null;
  // Nuevos
  telefono = null;
  correo = null;
  tipoVehiculo = null;
  ppu = null;
  marca = null;
  modelo = null;
  anio = 0;
  nAutorizacion = null;
  kmActual = 0;
  kmProximo = 0;
  idSucursal = 0;
  idUsuario = 0;
  respaldoEgresoLubricentro = [ResoaldoIngreso];
}
module.exports = IngresoLubricentro;
