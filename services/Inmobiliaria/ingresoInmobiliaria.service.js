const BaseService = require("../base.service");

class IngresoInmobiliariaService extends BaseService{
    constructor({ IngresoInmobiliariaBusiness }) {
        super(IngresoInmobiliariaBusiness);
        this._ingresoBusiness = IngresoInmobiliariaBusiness;
    }
    async createWithRespaldos(entity){
        const createdEntity = await this._ingresoBusiness.createWithRespaldos(
            entity
        );
        return createdEntity;
    }
    async getAllWithJoin() {
        const ingresos = await this._ingresoBusiness.getAllWithJoins();
        return ingresos;
    }
    async getOneWithJoin(id){
        const ingreso = await this._ingresoBusiness.getOneWithJoin(id);
        return ingreso;
    }
}
module.exports = IngresoInmobiliariaService;