const { EgresoInmobiliaria } = require("../../models");
const BaseBusiness = require("../base.business");

class EgresoInmobiliariaBusiness extends BaseBusiness {
  constructor({ EgresoInmobiliariaRepository }) {
    super(EgresoInmobiliariaRepository, EgresoInmobiliaria);
    this._egresoRepository = EgresoInmobiliariaRepository;
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
module.exports = EgresoInmobiliariaBusiness;
