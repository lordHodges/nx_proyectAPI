const BaseBusiness = require("../base.business");
const { Ingreso } = require("../../models");
class IngresoBusiness extends BaseBusiness {
  constructor({ IngresoRepository }) {
    super(IngresoRepository, Ingreso);
    this._ingresoRepository = IngresoRepository;
    this.ingresoToMap = Ingreso;
  }
}
module.exports = IngresoBusiness;
