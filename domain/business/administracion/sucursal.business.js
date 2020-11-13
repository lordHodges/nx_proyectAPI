const BaseBusiness = require("../base.business");
const { Sucursal } = require("../../models");
const mapper = require("automapper-js");

class SucursalBusiness extends BaseBusiness {
	constructor({ SucursalRepository }) {
		super(SucursalRepository, Sucursal);
		this._sucursalRepository = SucursalRepository;
		this.sucursalToMap = Sucursal;
	}
	async getByEmpresa(idEmpresa) {
		const sucursales = await this._sucursalRepository.getByEmpresa(idEmpresa);
		if (!sucursales) return null;
		return sucursales.map((sucursal) =>
			mapper(this.sucursalToMap, sucursal.toJSON())
		);
	}
}
module.exports = SucursalBusiness;
