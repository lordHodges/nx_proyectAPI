class ContratoClienteAbogadoController {
	constructor({ ContratoClienteAbogadoService }) {
		this._contratoService = ContratoClienteAbogadoService;
	}
	async getContratos(req, res) {
		const constratos = await this._contratoService.getContratos();
		return res.status(200).send(constratos);
	}
	async crearContratoSinoExiste(req, res) {
		const { body } = req;
		const [
			respuesta,
			contrato,
		] = await this._contratoService.crearContratoSinoExiste(body);
		return res.status(201).send({
			respuesta,
			contrato,
		});
	}
	async agregarCausasAContrato(req, res) {
		const { body } = req;
		const causaCreadas = await this._contratoService.agregarCausasAContrato(
			body
		);
		return res.status(201).send(causaCreadas);
	}

	async obtenerContratosPorCliente(req, res) {
		const { idCliente } = req.params;
		const contratosCliente = await this._contratoService.obtenerContratosPorCliente(
			idCliente
		);
		return res.status(200).send(contratosCliente);
	}
	async obtenerContratosPorNumero(req, res) {
		const { nContrato } = req.params;
		const contratosCliente = await this._contratoService.obtenerContratosPorNumero(
			nContrato
		);
		return res.status(200).send(contratosCliente);
	}
}
module.exports = ContratoClienteAbogadoController;
