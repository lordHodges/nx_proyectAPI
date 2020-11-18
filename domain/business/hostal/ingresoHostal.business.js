const IngresoHostal = require("../../models");
const BaseBusiness = require("../base.business");
const mapper = require("automapper-js");

class IngresoHostalBusiness extends BaseBusiness {
	constructor({ IngresoHostalRepository }) {
		super(IngresoHostalRepository, IngresoHostal);
		this._ingresoRepository = IngresoHostalRepository;
		this._ingresoToMap = IngresoHostal;
	}

	async createWithRespaldos(entity) {
		const createdEntity = await this._ingresoRepository.createWithRespaldos(
			entity
		);
		// const too = mapper(this._ingresoToMap, createdEntity.toJSON());
		return createdEntity;
	}
	async getAllWithJoins() {
		const ingresos = await this._ingresoRepository.getAllWithJoins();
		return ingresos;
	}
	async getOneWithJoin(id) {
		const ingreso = await this._ingresoRepository.getOneWithJoin(id);
		if (!ingreso) return null;
		return ingreso;
	}
}
module.exports = IngresoHostalBusiness;
