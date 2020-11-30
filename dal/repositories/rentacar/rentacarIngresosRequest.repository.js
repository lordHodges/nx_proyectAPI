class RentacarIngresosRequestRepository {
	constructor({ RequestApiHelper }) {
		this._request = RequestApiHelper;
	}
	async getArriendos() {
		//!consulta inicial devuelve todas los objetos relacionales del arriendo;
		try {
			const arriendos = await this._request.make_API_call(
				"https://www.imlchile.cl:3010/rentacar/api/mostrarArriendoFinanzas"
			);
			return arriendos;
		} catch (error) {
			const msje = "algo anda mal, pongase en contacto con el Administrador";

			return { error, msje };
		}
	}
	async getArriendo(idArriendo) {
		try {
			const arriendo = await this._request.make_API_call(
				`https://www.imlchile.cl:3010/rentacar/api/buscarArriendoFinanzas/${idArriendo}`
			);
			return arriendo;
		} catch (error) {
			const msje = "algo anda mal, pongase en contacto con el Administrador";

			return { error, msje };
		}
	}
}
module.exports = RentacarIngresosRequestRepository;
