const BaseService = require("../base.service");

class CostoLubricentroService extends BaseService{
    constructor({ CostoLubricentroBusiness }) {
        super(CostoLubricentroBusiness);
        this._costoLubricentroBusiness = CostoLubricentroBusiness;
    }
    async createWithRespaldos(entity){
        const createdEntity = await this._costoLubricentroBusiness.createdWithRespaldos(
            entity
        );
        return createdEntity;
    }
    async getAllWithJoin(){
        const costos = await this._costoLubricentroBusiness.getAllWithJoins();
        return costos;
    }
    async getOneWithJoin(id){
        const costo = await this._costoLubricentroBusiness.getOneWithJoin(id);
        return costo;
    }
}
module.exports = CostoLubricentroService;