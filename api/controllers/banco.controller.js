class BancoController {
	constructor({ BancoService }) {
		this._service = BancoService;
	}
	async persistirListaBancos(req, res) {
		const bancos = await this._service.persistirListaBancos();
		return res.status(200).send(bancos);
	}
	async getBancos(req, res) {
		const bancos = await this._service.getAll();
		return res.status(200).send(bancos);
	}
	async registrarCuentasBancarias(req, res) {
		const { body } = req;
		const cuenta = await this._service.registrarCuentasBancarias(body);
		return res.status(200).send(cuenta);
	}
	async obtenerCuentasByEntity(req, res) {
		const { idEntity } = req.params;
		const cuentas = await this._service.obtenerCuentasByEntity(idEntity);
		return res.status(200).send(cuentas);
	}
}
module.exports = BancoController;
