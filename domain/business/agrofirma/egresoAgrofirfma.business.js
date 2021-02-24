const BaseBusiness = require("../base.business");

class EgresoAgrofirmaBusiness extends BaseBusiness {
	constructor({ EgresoAgrofirmaRepository }) {
		super(EgresoAgrofirmaRepository);
		this._repository = EgresoAgrofirmaRepository;
	}
	async obtenerAllEgresos(){
		const egresos = await this._repository.getAll();
		return egresos;
	}
	async obtenerEgresos(id) {
		const egresos = await this._repository.obtenerEgresos(id);
		return egresos;
	}
	async obtenerEgreso(id) {
		const egreso = await this._repository.obtenerEgreso(id);
		return egreso;
	}
	async registrarEgreso(egreso) {
		const egresoCreated = await this._repository.registrarEgreso(egreso);
		return egresoCreated;
	}
}
module.exports = EgresoAgrofirmaBusiness;
