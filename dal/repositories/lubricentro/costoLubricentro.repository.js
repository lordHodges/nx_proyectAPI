const BaseRepository = require("../base.repository");

class CostoLubricentroRepository extends BaseRepository {
    constructor({ db }){
        super(db, "CostoLubricentro");
        this._db = db;
        this._costo = "CostoLubricentro";
    }
    getAllWithJoins(){
        return this._db[this.costo].findAll({
            include: [
                { model: this._db.Sucursal },
                { model: this._db.Usuario },
                { model: this._db.RespaldoCostoLubricentro },
            ],
        });
    }
    createWithRespaldos(entity){
        return this._db[this._costo].create(entity, {
            include: [this._db.RespaldoCostoLubricentro],
        });
    }
    async getOneWithJoin(id){
        return this._db[this._costo].findAll({
            include: [
                { model: this._db.Sucursal },
                { model: this._db.Usuario },
                { model: this._db.RespaldoCostoLubricentro },
            ],
            where: { id },
        });
    }
}

module.exports = CostoLubricentroRepository;