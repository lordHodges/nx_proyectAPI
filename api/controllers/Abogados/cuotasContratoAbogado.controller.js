class CuotasContratoAbogadoController {
	constructor({ CuotasContratoAbogadoService }) {
		this._cuotasService = CuotasContratoAbogadoService;
	}
	async upload(req, res) {
		if (!req.file) {
			console.log("No file received");
			return res.send({
				success: false,
			});
		} else {
			console.log("file received successfully");
			setTimeout(() => {
				return res.status(200).send(req.file.filename);
			}, 2000);
		}
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
	async obtenerCuotas(req, res) {
		try {
			const cuotas = await this._cuotasService.obtenerCuotas();
			return res.status(200).send(cuotas);
		} catch (error) {
			console.log(error);
			return res
				.status(500)
				.send({ msj: "no es posible realizar esta operacion" });
		}
	}
	async agregarRespaldos(req, res) {
		try {
			const { body } = req;
			const respaldos = this._cuotasService.agregarRespaldos(body);
			return res.status(201).send(respaldos);
		} catch (error) {
			console.log(error);
			return res
				.status(500)
				.send({ msj: "no es posible realizar esta operacion" });
		}
	}
	async obtenerRespaldos(req, res) {
		try {
			const { idCuota } = req.params;
			const respaldos = await this._cuotasService.obtenerRespaldos(idCuota);

			return res.status(201).send(respaldos);
		} catch (error) {
			console.log(error);
			return res
				.status(500)
				.send({ msj: "no es posible realizar esta operacion" });
		}
	}
}
module.exports = CuotasContratoAbogadoController;
