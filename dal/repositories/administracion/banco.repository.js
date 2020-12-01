const BaseRepository = require("../base.repository");

class BancoRepository extends BaseRepository {
	constructor({ RequestApiHelper, db }) {
		super(db, "Banco");
		this._request = RequestApiHelper;
	}
	async ObtenerListaBancosVigentes(url) {
		try {
			return await this._request.make_API_call(url);
		} catch (error) {
			const msje = "algo anda mal, pongase en contacto con el Administrador";

			return { error, msje };
		}
	}
}
module.exports = BancoRepository;
