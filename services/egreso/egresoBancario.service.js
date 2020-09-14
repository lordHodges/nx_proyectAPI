const BaseService = require("../base.service");

class EgresoBancarioService extends BaseService {
  constructor({ EgresoBancarioBusiness }) {
    super(EgresoBancarioBusiness);
  }
}
module.exports = EgresoBancarioService;
