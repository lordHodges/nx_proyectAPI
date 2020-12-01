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
}
module.exports = BancoController;
