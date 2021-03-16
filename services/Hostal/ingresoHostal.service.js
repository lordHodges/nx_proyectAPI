const BaseService = require("../base.service");

class IngresoHostalService extends BaseService {
  constructor({ IngresoHostalBusiness, MovimientosCuentasBusiness }) {
    super(IngresoHostalBusiness);
    this._ingresoBusiness = IngresoHostalBusiness;
    this._movimientoBusiness = MovimientosCuentasBusiness;
  }
  // ? cuando se crea un ingreso tambien se genera un movimiento en la cuenta asignada
  // ! esta fincion deberia asociarce a traves de un evento de ingreso registrado. 
  async createWithRespaldos(entity) {
    const createdEntity = await this._ingresoBusiness.createWithRespaldos(
      entity
    );
    const registrarMovimiento = await this._movimientoBusiness.registrarAbonos(entity.idCuentaAsignada, entity.monto, entity.fecha, null);
    return createdEntity;
  }
  async getAllWithJoin() {
    const ingresos = await this._ingresoBusiness.getAllWithJoins();
    return ingresos;
  }
  async getOneWithJoin(id) {
    const ingreso = await this._ingresoBusiness.getOneWithJoin(id);
    return ingreso;
  }
}
module.exports = IngresoHostalService;
