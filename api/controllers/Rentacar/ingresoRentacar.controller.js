class IngresoRentacarController {
	constructor({ RentacarService }) {
		this._rentacarService = RentacarService;
	}
	async getArriendos(req, res) {
		const arriendos = await this._rentacarService.getArriendos();

		return res.status(200).send(arriendos);
	}
	async getDetallePagos(req, res) {
		const { idArriendo } = req.params;

		const detalle = await this._rentacarService.getDetallePagos(idArriendo);

		return res.status(200).send(detalle);
	}
}
module.exports = IngresoRentacarController;
