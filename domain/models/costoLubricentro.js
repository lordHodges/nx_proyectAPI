//const respaldoCostoLubricentro = require("./respaldoCostoLubricentro");

class CostoLubricentro {
    id = 0;
    tipoCosto = null;
    fecha = null;
    monto = 0;
    responsable = null;
    descripcion = null;
    idSucursal = 0;
    idUsuario = 0;
    respaldoCostos = [RespaldoCostoLubricentro];
}
module.exports = CostoLubricentro;