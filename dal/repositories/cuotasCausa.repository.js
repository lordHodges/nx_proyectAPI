const BaseRepository = require("./base.repository");

class CuotaCausaRepository extends BaseRepository {
	constructor({ db }) {
		super(db, "CuotasCausa");
	}
	async registrarPago(idCuota, nuevoEstado) {
		await this._db.CuotasCausa.update(
			{ estado: nuevoEstado },
			{ where: { id: idCuota } }
		);

		return "Cuota Pagada con Exito";
	}
}
module.exports = CuotaCausaRepository;
