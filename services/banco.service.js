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
	async registrarCuentasBancarias(cuenta) {
		const cuentaCreated = await this._business.registrarCuentasBancarias(
			cuenta
		);
		return cuentaCreated;
	}
	async registrarCuentasSucursal(cuenta) {
		const cuentaCreated = await this._business.registrarCuentasSucursal(cuenta);
		return cuentaCreated;
	}
	async obtenerCuentasByEntity(idEntity) {
		const cuentas = await this._business.obtenerCuentasByEntity(idEntity);
		return cuentas;
	}
}
module.exports = BancoService;
