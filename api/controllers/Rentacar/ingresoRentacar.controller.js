class IngresoRentacarController {
	constructor({ RentacarService }) {
		this._rentacarService = RentacarService;
	}
	async getArriendos(req, res) {
		const arriendos = await this._rentacarService.getArriendos();
		return res.status(200).send(arriendos);
	}
}
module.exports = IngresoRentacarController;
