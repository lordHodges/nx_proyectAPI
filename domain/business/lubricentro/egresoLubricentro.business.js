const { EgresoLubricentro } = require("../../models");
const BaseBusiness = require("../base.business");

class EgresoLubricentroBusiness extends BaseBusiness {
  constructor({ EgresoLubricentroRepository, IngresoLubricentroBusiness }) {
    super(EgresoLubricentroRepository);
	this._egresoRepository = EgresoLubricentroRepository;
	this.ingresoBusiness = IngresoLubricentroBusiness;
  }

  async createWithRespaldos(entity) {
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
module.exports = EgresoLubricentroBusiness;
