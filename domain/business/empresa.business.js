const BaseBusiness = require("./base.business");
const { Empresa } = require("../models");

class EmpresaBusiness extends BaseBusiness {
  constructor({ EmpresaRepository }) {
    super(EmpresaRepository, Empresa);
  }
}
module.exports = EmpresaBusiness;
