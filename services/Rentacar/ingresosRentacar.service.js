class RentacarService {
	constructor({ RentacarIngresosRequestBusiness }) {
		this._rentacarService = RentacarIngresosRequestBusiness;
	}
	async getArriendos() {
		const arriendo = await this._rentacarService.getArriendos();
		return arriendo;
	}
	async getDetallePagos(idArriendo) {
		const detalle = await this._rentacarService.getDetallePagos(idArriendo);
		return detalle;
	}
}

module.exports = RentacarService;
