const BaseBusiness = require("../base.business");
const { IngresoHostal } = require("../../models");
class IngresoHostalBusiness extends BaseBusiness {
  constructor({ IngresoHostalRepository }) {
    super(IngresoHostalRepository, IngresoHostal);
    this._ingresoHostalRepository = IngresoHostalRepository;
    this.ingresoToMap = IngresoHostal;
  }
}
module.exports = IngresoHostalBusiness;
