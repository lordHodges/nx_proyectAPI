const IngresoLubricentro = require("../models/");
const BaseBusiness = require("./base.business");

class IngresoLubricentroBusiness extends BaseBusiness {
    constructor({ IngresoLubricentroRepository }) {
        super(IngresoLubricentroRepository, IngresoLubricentro);
        this._ingresoRepository = IngresoLubricentroRepository;
        
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
module.exports = IngresoLubricentroBusiness;