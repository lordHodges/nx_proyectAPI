class BancoController {
	constructor({ BancoService, GetIngresosMensualesService }) {
		this._service = BancoService;
		this._ingresosService = GetIngresosMensualesService;
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

	async registrarCuentasSucursal(req, res) {
		const { body } = req;
		const cuentaCreated = await this._service.registrarCuentasSucursal(body);
		return res.status(200).send(cuentaCreated);
	}

	async obtenerCuentasByEntity(req, res) {
		const { idEntity } = req.params;
		const cuentas = await this._service.obtenerCuentasByEntity(idEntity);
		return res.status(200).send(cuentas);
	}
	async obtenerIngresosMensuales(req, res) {
		const ingresos = await this._ingresosService.getIngresos();
		return res.status(200).send(ingresos);
	}
}
module.exports = BancoController;
