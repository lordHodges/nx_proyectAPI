const BaseBusiness = require("../base.business");

class RentacarIngresosRequestBusiness extends BaseBusiness {
	constructor({ RentacarIngresosRequestRepository }) {
		super(RentacarIngresosRequestRepository);
		this._rentacarService = RentacarIngresosRequestRepository;
	}
	async getArriendos() {
		const arriendos = await this._rentacarService.getArriendos();
		return arriendos;
	}
}
module.exports = RentacarIngresosRequestBusiness;
