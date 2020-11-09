class CuotasCausaController {
	constructor({ CuotasCausaService }) {
		this._cuotasCausaService = CuotasCausaService;
	}
	async registrarPago(req, res) {
		const { idCuota } = req.params;
		const { body } = req;
		const respuesta = await this._cuotasCausaService.registrarPago(
			idCuota,
			body
		);

		return res.status(200).send({ msj: respuesta });
	}
}
module.exports = CuotasCausaController;
