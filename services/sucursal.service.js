const BaseService = require("./base.service");

class SucursalService extends BaseService {
  constructor({ SucursalBusiness }) {
    super(SucursalBusiness);
  }
}
module.exports = SucursalService;
