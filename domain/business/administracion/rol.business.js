const BaseBusiness = require("../base.business");
const { Rol } = require("../../models");

class RolBusiness extends BaseBusiness {
	constructor({ RolRepository }) {
		super(RolRepository, Rol);
	}
}
module.exports = RolBusiness;
