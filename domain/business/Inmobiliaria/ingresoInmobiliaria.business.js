const { IngresoInmobiliaria } = require("../../models");
const BaseBusiness = require("../base.business");

class IngresoInmobiliariaBusiness extends BaseBusiness {
    constructor({ IngresoInmobiliariaRepository }) {
        super(IngresoInmobiliariaRepository, IngresoInmobiliaria);
        this._ingresoRepository = IngresoInmobiliariaRepository;
        
    }
    async createWithRespaldos(entity) {
        const createdEntity = await this._ingresoRepository.createWithRespaldos(
            entity
        );
        return createdEntity;
    }
    async getAllWithJoins(){
        const ingresos = await this._ingresoRepository.getAllWithJoins();
        return ingresos;
    }
    async getOneWithJoin(id){
        const ingreso = await this._ingresoRepository.getOneWithJoin(id);
        if (!ingreso) return null;
        return ingreso;
    }
}
module.exports = IngresoInmobiliariaBusiness;