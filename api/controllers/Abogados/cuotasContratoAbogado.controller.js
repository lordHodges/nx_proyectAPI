class CuotasContratoAbogadoController {
	constructor({ CuotasContratoAbogadoService }) {
		this._cuotasService = CuotasContratoAbogadoService;
	}
	async crearCuotas(req, res) {
		const { body } = req;

		const cuotas = await this._cuotasService.crearAGranel(body);

		return res.status(201).send(cuotas);
	}
	async registrarPago(req, res) {
		const { body } = req;
		const idCuota = body.idCuota;
		const cuota = await this._cuotasService.registrarPago(idCuota);
		return res.status(200).send({ msj: cuota });
	}
	async calcularCuotas(req, res) {
		const { body } = req;
		const idContrato = body.idContrato;
		const nCuotas = body.nCuotas;
		const montoInicial = body.montoInicial;
		const fechaInicio = body.fechaInicio;

		const cuotas = await this._cuotasService.calcularCuotas(
			idContrato,
			nCuotas,
			montoInicial,
			fechaInicio
		);

		return res.status(200).send(cuotas);
	}
	async repactarContrato(req, res) {
		const { body } = req;
		const excuotas = body.excuotas;
		const newcuotas = body.newcuotas;
		const cuotas = await this._cuotasService.repactarContrato(
			excuotas,
			newcuotas
		);
		return res.status(201).send(cuotas);
	}
}
module.exports = CuotasContratoAbogadoController;
