class RentacarService {
	constructor({ RentacarIngresosRequestBusiness }) {
		this._business = RentacarIngresosRequestBusiness;
	}
	async getArriendos() {
		const arriendo = await this._business.getArriendos();
		return arriendo;
	}
	async getDetallePagos(idArriendo) {
		const detalle = await this._business.getDetallePagos(idArriendo);
		return detalle;
	}
	async getArriendo(idArriendo) {
		const arriendo = await this._business.getArriendo(idArriendo);
		return arriendo;
	}
}

module.exports = RentacarService;
