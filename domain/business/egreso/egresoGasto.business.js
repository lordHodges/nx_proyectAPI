const BaseBusiness = require("../base.business");
const { EgresoGasto } = require("../../models");

class EgresoGastoBusiness extends BaseBusiness {
  constructor({ EgresoGastoRepository }) {
    super(EgresoGastoRepository, EgresoGasto);
    //sie xisten metodos adicionales al crud se
    //deben declarar los objetosd e la entidad
  }

  /* metodos fuera de crud */
}
module.exports = EgresoGastoBusiness;
