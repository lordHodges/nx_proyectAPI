const respaldoEgresoLubricentro = require("./respaldoEgresoLubricentro");

class EgresoLubricentro {
    id = 0;
    tipoEgreso = null;
    fecha = null;
    monto = 0;
    responsable = null;
    descripcion = null;
    idSucursal = 0;
    idUsuario = 0;
    respaldoEgresos = [RespaldoEgresoLubricentro];
    idIngreso = 0;
}
module.exports = EgresoLubricentro;