class RentacarIngresosRequestRepository {
	constructor({ RequestApiHelper }) {
		this._request = RequestApiHelper;
	}
	async getArriendos() {
		//!consulta inicial devuelve todas los objetos relacionales del arriendo;

		const arriendos = await this._request.make_API_call(
			"https://www.imlchile.cl:3011/rentacar/api/mostrarArriendoFinanzas"
		);
		return arriendos;
	}
}
module.exports = RentacarIngresosRequestRepository;
