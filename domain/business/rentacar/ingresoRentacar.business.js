const BaseBusiness = require("../base.business");
const { IngresoRentacar } = require("../../models");
class IngresoRentacarBusiness extends BaseBusiness {
  constructor({ IngresoRentacarRepository }) {
    super(IngresoRentacarRepository, IngresoRentacar);
  }
}
module.exports = IngresoRentacarBusiness;
