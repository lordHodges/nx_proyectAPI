const { CostoLubricentro } = require("../../models");
const BaseBusiness = require("../base.business");

class CostoLubricentroBusiness extends BaseBusiness {
    constructor({ CostoLubricentroRepository }){
        super(CostoLubricentroRepository, CostoLubricentro);
        this._costoRepository = CostoLubricentroRepository;
    }

    async createWithRespaldos(entity){
        const createdEntity = await this._costoRepository.createWithRespaldos(
            entity
        );
        return createdEntity;
    }
    async getAllWithJoins(){
        const costos = await this._costoRepository.getAllWithJoins();
        return costos;
    }
    async getOneWithJoin(id){
        const costo = await this._costoRepository.getOneWithJoin(id);
        if (!costo) return null;
        return costo;
    }
}

module.exports = CostoLubricentroBusiness;
