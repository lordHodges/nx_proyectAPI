const BaseBusiness = require("../base.business");

class IngresoAgrofirmaBusiness extends BaseBusiness {
	constructor({ IngresoAgrofirmaRepository }) {
		super(IngresoAgrofirmaRepository);
		this._repository = IngresoAgrofirmaRepository;
	}
	async obtenerIngresos() {
		const ingresos = await this._repository.obtenerIngresos();
		return ingresos;
	}
	async obtenerIngreso(id) {
		const ingreso = await this._repository.obtenerIngreso(id);
		return ingreso;
	}
	async obtenerIngresoByProyecto(id) {
		const ingresos = await this._repository.obtenerIngresoByProyecto(id);
		return ingresos;
	}
	async registrarIngreso(entity) {
		const ingresos = await this._repository.registrarIngreso(entity);
		return ingresos;
	}
}
module.exports = IngresoAgrofirmaBusiness;
