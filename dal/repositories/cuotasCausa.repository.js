const BaseRepository = require("./base.repository");

class CuotaCausaRepository extends BaseRepository {
	constructor({ db }) {
		super(db, "CuotasCausa");
	}
	async registrarPago(idCuota) {
		const cuota = await this._db.CuotasCausa.update(
			{ estado: "pagado" },
			{ where: { id: idCuota } }
		);

		return cuota;
	}
}
module.exports = CuotaCausaRepository;
