const BaseBusiness = require("../base.business");

class RentacarIngresosRequestBusiness extends BaseBusiness {
	constructor({ RentacarIngresosRequestRepository }) {
		super(RentacarIngresosRequestRepository);
		this._rentacarService = RentacarIngresosRequestRepository;
	}
	async getArriendos() {
		const arriendos = await this._rentacarService.getArriendos();

		const arriendosEstado = await this.getEstadoPago(arriendos);

		return arriendosEstado;
	}

	///
	//!manipulando el objeto 13
	//?,metodo para injectar variable con el valor total del arriendo.
	async getTotalArriendo() {}

	//?,metodo para injectar variable con el valor de estado pago del arriendo.
	async getEstadoPago(arriendos) {
		let count = 0;

		arriendos["data"].forEach((arriendo) => {
			arriendo["pagosArriendos"].forEach((pagoArriendo) => {
				pagoArriendo["pagos"].forEach((pago) => {
					if (pago["estado_pago"] == "PENDIENTE") {
						count++;
					}
				});
			});
			if (count > 0) {
				arriendo["estado_pago"] = "PENDIENTE";
			} else {
				arriendo["estado_pago"] = "PAGADO";
			}
			count = 0;
		});
		return arriendos;
	}
}
module.exports = RentacarIngresosRequestBusiness;
