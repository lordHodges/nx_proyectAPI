class GetIngresosEgresosService {
	constructor({ GetIngresosBusiness, GetEgresosBusiness, GetIngresosMensualesBusiness }) {
		this._ingresosBusiness = GetIngresosBusiness;
		this._egresosBusiness = GetEgresosBusiness;
		this._ingresosMensualesbusiness = GetIngresosMensualesBusiness;
	}
	async getIngresos() {
		const ingresos = await this._ingresosBusiness.getIngresos();
		return ingresos;
	}
	async getEgresos() {
		const egresos = await this._egresosBusiness.getEgresos();
		return egresos;
	}
	async getByYear(year) {
		const ingresos = await this._ingresosMensualesbusiness.getByYear(year);
		return ingresos;
	}
}
module.exports = GetIngresosEgresosService;
