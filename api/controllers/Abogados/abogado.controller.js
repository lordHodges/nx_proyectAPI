const request = require("request");
const fs = require("fs");
class AbogadoController {
	constructor({ AbogadoService, config, RentacarService }) {
		this._abogadoService = AbogadoService;
		this._test = RentacarService;
		this._config = config;
	}

	async getAbogados(req, res) {
		let abogados = await this._abogadoService.getAll();

		return res.status(200).send(abogados);
	}
	async getAbogado(req, res) {
		const { id } = req.params;
		let abogado = await this._abogadoService.get(id);
		if (!abogado) {
			return res.status(404).send();
		}

		return res.send({
			payload: abogado,
		});
	}
	//TODO quitar despues del testeo
	async testResponse(req, res) {
		const url =
			"https://www.imlchile.cl:3011/rentacar/pagos/mostrarPagosFinanzas";
		const resp = new Promise((resolve, reject) => {
			request(url, { json: true }, (err, res, body) => {
				if (err) reject(err);
				resolve(body);
			});
		});

		//let resp = await this._test.responder();
		return res.status(200).send(resp);
	}

	async createAbogado(req, res) {
		const { body } = req;
		const abogadoCreado = await this._abogadoService.create(body);

		return res.status(201).send({
			payload: { abogadoCreado },
		});
	}
	async updateAbogado(req, res) {
		const { body } = req;
		const { id } = req.params;

		const updated = await this._abogadoService.update(id, body);
		return res.status(201).send(updated);
	}
	async deleteAbogado(req, res) {
		const { id } = req.params;

		await this._usuarioService.delete(id);
		return res.status(204).send();
	}
}
module.exports = AbogadoController;
