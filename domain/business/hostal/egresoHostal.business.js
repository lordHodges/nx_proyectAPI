const { EgresoHostal } = require("../../models");
const BaseBusiness = require("../base.business");
const mapper = require("automapper-js");

class EgresoHostalBusiness extends BaseBusiness {
	constructor({ EgresoHostalRepository }) {
		super(EgresoHostalRepository, EgresoHostal);
		this._egresoRepository = EgresoHostalRepository;
		this._egresoToMap = EgresoHostal;
	}

	async createWithRespaldos(entity) {
		const ent = mapper(this._egresoToMap, entity);
		const createdEntity = await this._egresoRepository.createWithRespaldos(
			entity
		);
		// const too = mapper(this._egresoToMap, createdEntity.toJSON());
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
module.exports = EgresoHostalBusiness;
