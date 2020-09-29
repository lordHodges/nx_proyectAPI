const BaseService = require("./base.service");

class EmpresaService extends BaseService {
  constructor({ EmpresaBusiness }) {
    super(EmpresaBusiness);
    this._empresaBusiness = EmpresaBusiness;
  }
  async getAllWithSucursal() {
    const empresas = await this._empresaBusiness.getAllWithSucursal();
    return empresas;
  }
  async getOneWithSucursal(id) {
    const empresa = await this._empresaBusiness.getOneWithSucursal(id);
    return empresa;
  }
}
module.exports = EmpresaService;
