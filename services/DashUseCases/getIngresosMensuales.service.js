class GetIngresosMensualesService {
	constructor({ GetIngresosMensualesBusiness }) {
		this._ingresosBusiness = GetIngresosMensualesBusiness;
	}
	async getIngresos() {
		const ingresos = await this._ingresosBusiness.getIngresos();
		return ingresos;
	}
}
module.exports = GetIngresosMensualesService;
