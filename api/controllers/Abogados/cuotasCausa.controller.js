class CuotasCausaController {
	constructor({ CuotasCausaService }) {
		this._cuotasCausaService = CuotasCausaService;
	}
	async registrarPago(req, res) {
		const { idCuota } = req.params;
		const cuota = await this._cuotasCausaService.registrarPago(idCuota);

		return res
			.status(200)
			.send({ payload: cuota, msj: "Cuota Pagada con exito" });
	}
}
module.exports = CuotasCausaController;
