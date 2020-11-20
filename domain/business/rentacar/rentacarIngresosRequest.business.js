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

	async getDetallePagos(idArriendo) {
		const arriendos = await this.getArriendos();
		let arriendoO = {};
		let pagosArriendos = [];
		let detalle = {};
		arriendos["data"].forEach((arriendo) => {
			if (arriendo["id_arriendo"] == idArriendo) {
				//arriendoO = arriendo;
				arriendo["pagosArriendos"].forEach((pagoArriendo) => {
					detalle["idPago"] = pagoArriendo["id_pagoArriendo"];
					if (pagoArriendo["pagos"].length > 1) {
						detalle["cliente"] = pagoArriendo["pagos"][0];
						detalle["remplazo"] = pagoArriendo["pagos"][1];
					}
					if (pagoArriendo["pagos"].length == 1) {
						detalle["cliente"] = pagoArriendo["pagos"][0];
					}

					detalle["idPago"] = pagoArriendo["id_pagoArriendo"];
					pagosArriendos.push(detalle);
				});
			}
		});

		return pagosArriendos;
	}

	///
	//!manipulando el objeto <3
	//?,metodo para injectar variable con el valor total del arriendo.
	async getTotalArriendo(arriendos) {
		//el total pago incluye iva;
		let totalArriendo = 0;
		arriendos["data"].forEach((arriendo) => {
			arriendo["pagosArriendo"].forEach((pagoArriendo) => {
				pagoArriendo["pagos"].forEach((pago) => {
					totalArriendo += pago["total_pago"];
				});
			});
			arriendo["totalArriendo"] = totalArriendo;
			totalArriendo = 0;
		});
		return arriendos;
	}

	//?,metodo para injectar variable con el valor de estado pago del arriendo.
	async getEstadoPago(arriendos) {
		let count = 0;
		let totalArriendo = 0;

		arriendos["data"].forEach((arriendo) => {
			arriendo["pagosArriendos"].forEach((pagoArriendo) => {
				pagoArriendo["pagos"].forEach((pago) => {
					//definiendo total PAgo Let;
					totalArriendo += pago["total_pago"];
					//definiendo estadoPago Arriendo let
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

			arriendo["totalArriendo"] = totalArriendo;
			totalArriendo = 0;

			count = 0;
		});
		return arriendos;
	}
}
module.exports = RentacarIngresosRequestBusiness;
