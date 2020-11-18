const BaseBusiness = require("../base.business");

class EgresoFirmaBusiness extends BaseBusiness {
	constructor({ EgresoFirmaRepository }) {
		super({ EgresoFirmaRepository });
		this._egresoRepository = EgresoFirmaRepository;
	}
	async createWithRespaldos(entity) {
		const createdEntity = await this._egresoRepository.createWithRespaldos(
			entity
		);
		return createdEntity;
	}
	async getAllWithJoins() {
		const egresos = await this._egresoRepository.getAllWithJoins();
		return egresos;
	}
	async getOneWithJoin(id) {
		const egreso = await this._egresoRepository.getOneWithJoin(id);
		if (!egreso) return null;
		return egreso;
	}
}
module.exports = EgresoFirmaBusiness;
