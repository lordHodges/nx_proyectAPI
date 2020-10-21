const egresoHostal = require("../../dal/models/egresoHostal");
const { EgresoHostal } = require("../models");
const BaseBusiness = require("./base.business");
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
}
module.exports = EgresoHostalBusiness;
