const BaseService = require("../base.service");

class IngresoAgrofirmaService extends BaseService {
	constructor({ IngresoAgrofirmaBusiness }) {
		super(IngresoAgrofirmaBusiness);
		this._business = IngresoAgrofirmaBusiness;
	}
	async obtenerIngresos() {
		const ingresos = await this._business.obtenerIngresos();
		return ingresos;
	}
	async obtenerIngreso(id) {
		const ingreso = await this._business.obtenerIngreso(id);
		return ingreso;
	}
	async obtenerIngresoByProyecto(id) {
		const ingresos = await this._business.obtenerIngresoByProyecto(id);
		return ingresos;
	}
	async registrarIngreso(entity) {
		const ingresos = await this._business.registrarIngreso(entity);
		return ingresos;
	}
}
module.exports = IngresoAgrofirmaService;
