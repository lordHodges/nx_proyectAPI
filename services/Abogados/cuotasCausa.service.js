const BaseService = require("../base.service");

class CuotasCausaService extends BaseService {
	constructor({ CuotasCausaBusiness }) {
		super(CuotasCausaBusiness);
		this._cuotasCausaBusiness = CuotasCausaBusiness;
	}
	async registrarPago(idCuota) {
		const cuota = await this._cuotasCausaBusiness.registrarPago(idCuota);
		return cuota;
	}
}
module.exports = CuotasCausaService;
