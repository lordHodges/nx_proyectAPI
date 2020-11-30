const BaseBusiness = require("../base.business");

class RentacarIngresosRequestBusiness extends BaseBusiness {
	constructor({ RentacarIngresosRequestRepository }) {
		super(RentacarIngresosRequestRepository);
		this._repository = RentacarIngresosRequestRepository;
	}
	async getArriendos() {
		const arriendos = await this._repository.getArriendos();

		const arriendosEstado = await this.getEstadoPago(arriendos);

		return arriendosEstado;
	}
	async getArriendo(idArriendo) {
		const arriendo = await this._repository.getArriendo(idArriendo);
		return arriendo;
	}

	async getDetallePagos(idArriendo) {
		const arriendos = await this.getArriendos();
		let respuesta = {};
		let totales = {};
		let pagosArriendos = [];
		let detalle = {};
		let pagoCliente = 0;
		let pagoRemplazo = 0;
		arriendos["data"].forEach((arriendo) => {
			if (arriendo["id_arriendo"] == idArriendo) {
				arriendo["pagosArriendos"].forEach((pagoArriendo) => {
					detalle = {};

					detalle["idPago"] = pagoArriendo["id_pagoArriendo"];
					if (pagoArriendo["pagos"].length > 1) {
						pagoCliente += pagoArriendo["pagos"][0]["total_pago"];
						pagoRemplazo += pagoArriendo["pagos"][1]["total_pago"];
						detalle["cliente"] = pagoArriendo["pagos"][0];
						detalle["remplazo"] = pagoArriendo["pagos"][1];
					}
					if (pagoArriendo["pagos"].length == 1) {
						pagoCliente += pagoArriendo["pagos"][0]["total_pago"];
						detalle["cliente"] = pagoArriendo["pagos"][0];
					}

					pagosArriendos.push(detalle);
				});

				totales.totalCliente = pagoCliente;
				totales.totalRemplazo = pagoRemplazo;
			}
		});
		respuesta = { totales, pagosArriendos };

		return respuesta;
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
