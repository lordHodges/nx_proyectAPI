const BaseService = require("../base.service");

class EgresoFirmaService extends BaseService {
	constructor({ EgresoFirmaBusiness }) {
		super({ EgresoFirmaBusiness });
		this._egresoBusiness = EgresoFirmaBusiness;
	}
	async createWithRespaldos(entity) {
		const createdEntity = await this._egresoBusiness.createWithRespaldos(
			entity
		);
		return createdEntity;
	}
	async getAllWithJoin() {
		const egresos = await this._egresoBusiness.getAllWithJoins();
		return egresos;
	}
	async getOneWithJoin(id) {
		const egreso = await this._egresoBusiness.getOneWithJoin(id);
		return egreso;
	}
}
module.exports = EgresoFirmaService;
