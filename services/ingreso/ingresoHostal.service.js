const BaseService = require("../base.service");

class IngresoHostalService extends BaseService {
  constructor({ IngresoHostalBusiness }) {
    super(IngresoHostalBusiness);
    this._ingresoBusiness = IngresoHostalBusiness;
  }
  async getAllWithJoin() {
    const ingresos = await this._ingresoBusiness.getAllWithJoin();
    return ingresos;
  }
}
module.exports = IngresoHostalService;
