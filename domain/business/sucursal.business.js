const BaseBusiness = require("./base.business");
const { Sucursal } = require("../models");

class SucursalBusiness extends BaseBusiness {
  constructor({ SucursalRepository }) {
    super(SucursalRepository, Sucursal);
  }
}
module.exports = SucursalBusiness;
