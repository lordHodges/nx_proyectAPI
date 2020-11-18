const mapper = require("automapper-js");
const { EmpresaDto } = require("../../dtos");

class EmpresaController {
	constructor({ EmpresaService }) {
		this._empresaService = EmpresaService;
	}
	async getEmpresasConSucursales(req, res) {
		let empresas = await this._empresaService.getAllWithSucursal();
		empresas = empresas.map((x) => mapper(EmpresaDto, x));
		return res.send(empresas);
	}

	async getEmpresa(req, res) {
		const { id } = req.params;
		let empresa = await this._empresaService.get(id);
		if (!empresa) {
			return res.status(404).send();
		}
		empresa = mapper(EmpresaDto, empresa);
		return res.send(empresa);
	}
	async getEmpresaConSucursales(req, res) {
		const { id } = req.params;
		let empresa = await this._empresaService.getOneWithSucursal(id);
		if (!empresa) {
			return res.status(404).send();
		}
		empresa = mapper(EmpresaDto, empresa);
		return res.send(empresa);
	}

	async createEmpresa(req, res) {
		const { body } = req;
		const createdEmpresa = await this._empresaService.create(body);
		//const empresa = mapper(EmpresaDto, createdEmpresa);
		return res.status(201).send({
			payload: createdEmpresa,
		});
	}

	async updateEmpresa(req, res) {
		const { body } = req;
		const { id } = req.params;

		await this._empresaService.update(id, body);
		return res.status(204).send();
	}

	async deleteEmpresa(req, res) {
		const { id } = req.params;

		await this._empresaService.delete(id);
		return res.status(204).send();
	}
}

module.exports = EmpresaController;
