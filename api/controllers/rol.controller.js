const mapper = require("automapper-js");
const { RolDto } = require("../dtos");

class RolController {
	constructor({ RolService }) {
		this._rolService = RolService;
	}
	async getRoles(req, res) {
		let roles = await this._rolService.getAll();
		return res.send(roles);
	}

	async getRol(req, res) {
		const { id } = req.params;
		let rol = await this._rolService.get(id);
		if (!rol) {
			return res.status(404).send();
		}
		return res.send({
			payload: rol,
		});
	}

	async createRol(req, res) {
		const { body } = req;
		const rol = await this._rolService.create(body);
		return res.status(201).send({
			payload: rol,
		});
	}

	async updateRol(req, res) {
		const { body } = req;
		const { id } = req.params;

		await this._rolService.update(id, body);
		return res.status(204).send();
	}

	async deleteRol(req, res) {
		const { id } = req.params;

		await this._rolService.delete(id);
		return res.status(204).send();
	}
}

module.exports = RolController;
