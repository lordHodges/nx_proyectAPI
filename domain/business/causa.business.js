const BaseBusiness = require("./base.business");

class CausaBusiness extends BaseBusiness {
	constructor({ CausaRepository }) {
		super(CausaRepository);
		this._causaRepository = CausaRepository;
	}

	async crearSinoExiste(codigo) {
		const [causa, created] = await this._causaRepository.crearSinoExiste(
			codigo
		);
		return [causa, created];
	}
	async guardarCausa(causa) {
		const guardado = await this._causaRepository.guardarCausa(causa);
		return guardado;
	}
	async getCausasPorCliente(idCliente) {
		const causas = await this._causaRepository.getCausasPorCliente(idCliente);
		return causas;
	}
	async getCausaConCuota(idCausa) {
		const causa = await this._causaRepository.getCausaConCuota(idCausa);
		return causa;
	}
	async actualizarSaldoPendiente(idCausa, montoAdescontar) {
		const causa = await this._causaRepository.get(idCausa);
		const saldoPendiente = causa.saldoPendiente;
		const montoConDescuento = saldoPendiente - montoAdescontar;
		let estadoCausa = "";
		if (montoConDescuento == 0) {
			estadoCausa = "pagado";
		} else {
			estadoCausa = "pendiente";
		}
		const respuesta = await this._causaRepository.actualizarSaldoPendiente(
			causa.id,
			montoConDescuento,
			estadoCausa
		);
		return respuesta;
	}
}
module.exports = CausaBusiness;
