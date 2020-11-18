const BaseRepository = require("./base.repository");

class IngresoLubricentroRepository extends BaseRepository{
    constructor({db}){
        super(db,"IngresoLubricentro");
        this._db=db;
        this._ingreso="IngresoLubricentro";
    }
    getAllWithJoins(){
        return this._db[this._ingreso].findAll({
            include:[
                {model:this._db.Sucursal},
                {model:this._db.Usuario},
                {model: this._db.RespaldoIngresoLubricentro },
            ],
        });
    }
    createWithRespaldos(entity){
        return this._db[this._ingreso].create(entity, {
            include: [this._db.RespaldoIngresoLubricentro],
        });
    }
    async getOneWithJoin(id){
        return this._db[this._ingreso].findAll({
            include: [
                {model:this._db.Sucursal},
                {model:this._db.Usuario},
                {model: this._db.RespaldoIngresoLubricentro },
            ],
            where: {id},
        });
    }
}
module.exports=IngresoLubricentroRepository;