const BaseService = require("../base.service");

class CuotasCausaService extends BaseService {
	constructor({ CuotasCausaBusiness }) {
		super(CuotasCausaBusiness);
		this._cuotasCausaBusiness = CuotasCausaBusiness;
	}
	async registrarPago(idCuota, cuota) {
		const respuesta = await this._cuotasCausaBusiness.registrarPago(
			idCuota,
			cuota
		);
		return respuesta;
	}
}
module.exports = CuotasCausaService;
