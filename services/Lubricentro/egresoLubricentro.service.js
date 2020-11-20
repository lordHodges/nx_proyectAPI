const BaseService = require("../base.service");

class EgresoLubricentroService extends BaseService {
    constructor ({ EgresoLubricentroBusiness }){
        super(EgresoLubricentroBusiness);
        this._egresoBusiness = EgresoLubricentroBusiness;
    }
    async createWithRespaldos(entity){
        const createdEntity = await this._egresoBusiness.createWithRespaldos(
            entity
        );
        return createdEntity;
    }
    async getAllWithJoin(){
        const egresos = await this._egresoBusiness.getAllWithJoins();
        return egresos;
    }
    async getOneWithJoin(id){
        const egreso = await this._egresoBusiness.getOneWithJoin(id);
        return egreso;
    }
}
module.exports = EgresoLubricentroService;