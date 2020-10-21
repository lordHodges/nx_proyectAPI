const BaseService = require("../base.service");

class EgresoHostalService extends BaseService {
  constructor({ EgresoHostalBusiness }) {
    super(EgresoHostalBusiness);
    this._egresoBusiness = EgresoHostalBusiness;
  }
  async createWithRespaldos(entity) {
    const createdEntity = await this._egresoBusiness.createWithRespaldos(
      entity
    );
    return createdEntity;
  }
}
module.exports = EgresoHostalService;
