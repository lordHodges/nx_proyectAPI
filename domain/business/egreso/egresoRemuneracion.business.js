const BaseBusiness = require("../base.business");
const { EgresoRemuneracion } = require("../../models");

class EgresoRemuneracionBusiness extends BaseBusiness {
  constructor({ EgresoRemuneracionRepository }) {
    super(EgresoRemuneracionRepository, EgresoRemuneracion);
    //sie xisten metodos adicionales al crud se
    //deben declarar los objetosd e la entidad
  }

  /* metodos fuera de crud */
}
module.exports = EgresoRemuneracionBusiness;
