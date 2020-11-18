class RentacarService {
	constructor({ RequestApiHelper }) {
		this._request = RequestApiHelper;
	}
	async responder() {
		const res = await this._request.make_API_call(
			"https://www.imlchile.cl:3011/rentacar/pagos/mostrarPagosFinanzas"
		);
		return res;
	}
}

module.exports = RentacarService;
