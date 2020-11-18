class RentacarService {
	constructor({ RentacarIngresosRequestBusiness }) {
		this._rentacarService = RentacarIngresosRequestBusiness;
	}
	async getArriendos() {
		const arriendos = await this._rentacarService.getArriendos();
		return arriendos;
	}
}

module.exports = RentacarService;
