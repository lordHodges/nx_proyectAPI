const BaseBusiness = require("../base.business");
const mapper = require("automapper-js");

const { Empresa } = require("../../models");

class EmpresaBusiness extends BaseBusiness {
	constructor({ EmpresaRepository }) {
		super(EmpresaRepository, Empresa);
		this._empresaRepository = EmpresaRepository;
		this.empresa = Empresa;
	}
	async getAllWithSucursal() {
		const empresas = await this._empresaRepository.getAllWithSucursal();
		return empresas;
	}
	async getOneWithSucursal(id) {
		const empresa = await this._empresaRepository.getOneWithSucursal(id);
		if (!empresa) return null;
		return empresa;
	}
}
module.exports = EmpresaBusiness;
