const BaseService = require("../base.service");

class EgresoRentacarService extends BaseService {
	constructor({ EgresoRentacarBusiness }) {
		super(EgresoRentacarBusiness);
		this._business = EgresoRentacarBusiness;
	}
	async createWithRespaldos(egreso) {
		const createdEgreso = await this._business.createWithRespaldos(egreso);
		return createdEgreso;
	}
	async getAllWithJoin() {
		const egresos = await this._business.getAllWithJoins();
		return egresos;
	}
	async getOneWithJoin(id) {
		const egreso = await this._business.getOneWithJoin(id);
		return egreso;
	}
	async getDetalleEgreso(idEgreso) {
		const detalle = await this._business.getDetalleEgreso(idEgreso);
		return detalle;
	}
}
module.exports = EgresoRentacarService;
