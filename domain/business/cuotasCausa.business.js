const cuotasCausa = require("../../dal/models/cuotasCausa");
const { CausaRepository } = require("../../dal/repositories");
const BaseRepository = require("../../dal/repositories/base.repository");
const CuotaCausaRepository = require("../../dal/repositories/cuotasCausa.repository");

class CuotasCausaBusiness extends BaseRepository {
	constructor({ CuotasCausaRepository }) {
		super(CuotasCausaRepository);
		this._cuotasCausaRepository = CuotaCausaRepository;
	}

	async registrarPago(idCuota) {
		const cuota = await this._cuotasCausaRepository.registrarPago(idCuota);
		return cuota;
	}
}
module.exports = CuotasCausaBusiness;
