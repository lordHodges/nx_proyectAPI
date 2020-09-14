const BaseBusiness = require("../base.business");
const { EgresoBancario } = require("../../models");
class EgresoBancarioBusiness extends BaseBusiness {
  constructor({ EgresoBancarioRepository }) {
    super(EgresoBancarioRepository, EgresoBancario);
  }
}
module.exports = EgresoBancarioBusiness;
