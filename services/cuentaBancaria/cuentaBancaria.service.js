const BaseService = require("../base.service");

class CuentaBancariaService extends BaseService {
	constructor({ BancoBusiness }) {
		super(BancoBusiness);
		this._business = BancoBusiness;
	}
	// ? a quien pertence la cuenta

	async consultarEntidad(idEntidad) {
		//consultar en el business que tipo de entidad corresponde
	}
}
module.exports = CuentaBancariaService;
