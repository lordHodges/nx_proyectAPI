const BaseService = require("../base.service");

class EgresoImpuestoService extends BaseService {
  constructor({ EgresoImpuestoBusiness }) {
    super(EgresoImpuestoBusiness);
  }
}
module.exports = EgresoImpuestoService;
