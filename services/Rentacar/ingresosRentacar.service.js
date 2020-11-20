class RentacarService {
	constructor({ RentacarIngresosRequestBusiness }) {
		this._rentacarService = RentacarIngresosRequestBusiness;
	}
	async getArriendos() {
		const arriendo = await this._rentacarService.getArriendos();
		return arriendo;
	}
}

module.exports = RentacarService;
