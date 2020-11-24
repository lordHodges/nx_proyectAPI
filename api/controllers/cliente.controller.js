const mapper = require("automapper-js");

class ClienteController {
	constructor({ ClienteService }) {
		this._clienteService = ClienteService;
	}
	async crearClienteSinoExiste(req, res) {
		const { rut } = req.params;
		const [cliente, created] = await this._clienteService.crearSinoExiste(rut);

		return res.status(201).send({
			cliente,
			created,
		});
	}
	async guardarCliente(req, res) {
		const { rut } = req.params;
		const { body } = req;
		await this._clienteService.guardarCliente(rut, body);
		return res.status(204).send();
	}
	async getClientes(req, res) {
		const clientes = await this._clienteService.getAll();
		return res.status(200).send(clientes);
	}
}
module.exports = ClienteController;
