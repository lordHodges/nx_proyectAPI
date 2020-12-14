const BaseService = require("../base.service");
class EgresoAgrofirmaService extends BaseService {
	constructor({ EgresoAgrofirmaBusiness }) {
		super(EgresoAgrofirmaBusiness);
		this._business = EgresoAgrofirmaBusiness;
	}
	async obtenerEgresos(id) {
		const egresos = await this._business.obtenerEgresos(id);
		return egresos;
	}
	async obtenerEgreso(id) {
		const egreso = await this._business.obtenerEgreso(id);
		return egreso;
	}
	async registrarEgreso(egreso) {
		const egresoCreated = await this._business.registrarEgreso(egreso);
		return egresoCreated;
	}
}
module.exports = EgresoAgrofirmaService;
