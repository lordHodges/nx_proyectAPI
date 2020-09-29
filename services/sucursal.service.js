const BaseService = require("./base.service");

class SucursalService extends BaseService {
  constructor({ SucursalBusiness }) {
    super(SucursalBusiness);
    this._sucursalBusiness = SucursalBusiness;
  }
  async getByEmpresa(idEmpresa) {
    const sucursal = await this._sucursalBusiness.getByEmpresa(idEmpresa);
    return sucursal;
  }
}
module.exports = SucursalService;
