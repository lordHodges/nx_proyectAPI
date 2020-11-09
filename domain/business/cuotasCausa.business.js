const BaseRepository = require("../../dal/repositories/base.repository");

class CuotasCausaBusiness extends BaseRepository {
	constructor({ CuotasCausaRepository, CausaBusiness }) {
		super(CuotasCausaRepository, CausaBusiness);
		this._cuotasCausaRepository = CuotasCausaRepository;
		this._causaBusiness = CausaBusiness;
	}

	async registrarPago(idCuota, cuota) {
		const estado = "pagado";
		const cuotaF = await this._cuotasCausaRepository.get(idCuota);
		await this._cuotasCausaRepository.registrarPago(idCuota, estado);
		const res = await this._causaBusiness.actualizarSaldoPendiente(
			cuota.idCausa,
			cuota.montoCuota
		);
		return res;
	}
}
module.exports = CuotasCausaBusiness;
