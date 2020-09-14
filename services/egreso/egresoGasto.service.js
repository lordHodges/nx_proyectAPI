const BaseService = require("../base.service");

class EgresoGastoService extends BaseService {
  constructor({ EgresoGastoBusiness }) {
    super(EgresoGastoBusiness);
  }
}
module.exports = EgresoGastoService;
