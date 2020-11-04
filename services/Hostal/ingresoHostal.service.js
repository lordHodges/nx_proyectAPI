const BaseService = require("../base.service");

class IngresoHostalService extends BaseService {
  constructor({ IngresoHostalBusiness }) {
    super(IngresoHostalBusiness);
    this._ingresoBusiness = IngresoHostalBusiness;
  }
  async createWithRespaldos(entity) {
    const createdEntity = await this._ingresoBusiness.createWithRespaldos(
      entity
    );
    return createdEntity;
  }
  async getAllWithJoin() {
    const ingresos = await this._ingresoBusiness.getAllWithJoins();
    return ingresos;
  }
  async getOneWithJoin(id) {
    const ingreso = await this._ingresoBusiness.getOneWithJoin(id);
    return ingreso;
  }
}
module.exports = IngresoHostalService;
