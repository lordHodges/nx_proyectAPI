const BaseBusiness = require("../base.business");
const { EgresoImpuesto } = require("../../models");

class EgresoImpuestoBusiness extends BaseBusiness {
  constructor({
    /* EgresoCostoRepository repositorio */
    EgresoImpuestoRepository,
  }) {
    super(EgresoImpuestoRepository, EgresoImpuesto);
    //sie xisten metodos adicionales al crud se
    //deben declarar los objetosd e la entidad
  }

  /* metodos fuera de crud */
}
module.exports = EgresoImpuestoBusiness;
