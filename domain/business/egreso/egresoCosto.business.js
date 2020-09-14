const BaseBusiness = require("../base.business");
const { EgresoCosto } = require("../../models");

class EgresoCostoBusiness extends BaseBusiness {
  constructor({ EgresoCostoRepository }) {
    super(EgresoCostoRepository, EgresoCosto);
    //sie xisten metodos adicionales al crud se
    //deben declarar los objetosd e la entidad
  }

  /* metodos fuera de crud */
}
module.exports = EgresoCostoBusiness;
