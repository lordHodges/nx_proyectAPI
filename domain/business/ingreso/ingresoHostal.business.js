const BaseBusiness = require("../base.business");
const mapper = require("automapper-js");

const { IngresoHostal } = require("../../models");

class IngresoHostalBusiness extends BaseBusiness {
  constructor({ IngresoHostalRepository }) {
    super(IngresoHostalRepository, IngresoHostal);
    this._ingresoHostalRepository = IngresoHostalRepository;
    this.ingresoToMap = IngresoHostal;
  }
  async getAllWithJoin() {
    const ingresos = await this._ingresoHostalRepository.getAllWithJoin();
    return ingresos.map((ingreso) =>
      mapper(this.ingresoToMap, ingreso.toJSON())
    );
  }
}
module.exports = IngresoHostalBusiness;
