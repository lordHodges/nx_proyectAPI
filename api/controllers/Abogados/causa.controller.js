class CausaController {
	constructor({ CausaService }) {
		this._causaService = CausaService;
	}

	async crearCausaSinoExiste(req, res) {
		const { codigo } = req.params;
		const [causa, created] = await this._causaService.crearSinoExiste(codigo);
		return res.status(201).send({
			causa,
			created,
		});
	}
	async guardarCausa(req, res) {
		const { body } = req;
		const guardado = await this._causaService.guardarCausa(body);
		return res.status(204).send({ payload: guardado });
	}
	async getCausasPorCliente(req, res) {
		const { idCliente } = req.params;
		const causas = await this._causaService.getCausasPorCliente(idCliente);
		return res.status(200).send(causas);
	}
	async getCausa(req, res) {
		const { idCausa } = req.params;
		const causa = await this._causaService.get(idCausa);
		return res.status(200).send(causa);
	}
	//TODO validar automapper del metodo base
}
module.exports = CausaController;
