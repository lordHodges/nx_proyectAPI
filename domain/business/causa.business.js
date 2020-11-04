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
}
module.exports = CausaBusiness;
