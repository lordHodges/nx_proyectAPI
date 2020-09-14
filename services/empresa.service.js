const BaseService = require("./base.service");

class EmpresaService extends BaseService {
  constructor({ EmpresaBusiness }) {
    super(EmpresaBusiness);
  }
}
module.exports = EmpresaService;
