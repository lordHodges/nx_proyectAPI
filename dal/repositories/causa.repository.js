const { createDisposableResolver } = require("awilix");
const BaseRepository = require("./base.repository");

class CausaRepository extends BaseRepository {
	constructor({ db }) {
		super(db, "Causa");
	}
	async crearSinoExiste(codigo) {
		const finded = await this._db.Causa.findOne({
			include: [
				{ model: this._db.CuotasCausa },
				{ model: this._db.Cliente },
				{ model: this._db.Abogado },
			],
			where: { codigo: codigo },
		});
		if (finded) {
			return [finded, false];
		} else {
			return [finded, true];
		}
	}
	async guardarCausa(causa) {
		const create = await this._db.Causa.create(causa, {
			include: [this._db.CuotasCausa],
		});

		return create;
	}
	async getCausasPorCliente(idCliente) {
		const causas = await this._db.Causa.findAll({ where: { idCliente } });
		return causas;
	}
	async getCausaConCuota(idCausa) {
		const causa = await this._db.Causa.findOne({
			include: [{ model: this._db.CuotasCausa }],
			where: { id: idCausa },
		});
		return causa;
	}
	async actualizarSaldoPendiente(idCausa, montoConDescuento, estadoNuevo) {
		await this._db.Causa.update(
			{ saldoPendiente: montoConDescuento, estado: estadoNuevo },
			{ where: { id: idCausa } }
		);
		return "ok";
	}
}

module.exports = CausaRepository;
