const BaseService = require("./base.service");

class BancoService extends BaseService {
	constructor({ BancoBusiness }) {
		super(BancoBusiness);
		this._business = BancoBusiness;
	}
	async persistirListaBancos() {
		const bancos = await this._business.persistirListaBancos();
		return bancos;
	}
	async obtenerListaBancos() {
		const bancos = await this._business.obtenerBancosDB();
		return bancos;
	}
}
module.exports = BancoService;
