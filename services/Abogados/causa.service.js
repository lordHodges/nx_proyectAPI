const BaseService = require("../base.service");

class CausaService extends BaseService {
	constructor({ CausaBusiness }) {
		super(CausaBusiness);
		this._causaBusiness = CausaBusiness;
	}
	async crearSinoExiste(codigo) {
		const [causa, created] = await this._causaBusiness.crearSinoExiste(codigo);
		return [causa, created];
	}
	async guardarCausa(causa) {
		const guardado = await this._causaBusiness.guardarCausa(causa);
		return guardado;
	}
	async getCausasPorCliente(idCliente) {
		const causas = await this._causaBusiness.getCausasPorCliente(idCliente);
		return causas;
	}
}
module.exports = CausaService;
