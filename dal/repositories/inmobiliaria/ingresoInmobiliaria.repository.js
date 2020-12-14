const BaseRepository = require("../base.repository");

class IngresoInmobiliariaRepository extends BaseRepository{
    constructor({db}){
        super(db,"IngresoInmobiliaria");
        this._db=db;
        this._ingreso="IngresoInmobiliaria";
    }
    getAllWithJoins(){
        return this._db[this._ingreso].findAll({
            include:[
                {model:this._db.Sucursal},
                {model:this._db.Usuario},
                {model: this._db.RespaldoIngresoInmobiliaria },
            ],
        });
    }
    createWithRespaldos(entity){
        return this._db[this._ingreso].create(entity, {
            include: [this._db.RespaldoIngresoInmobiliaria],
        });
    }
    async getOneWithJoin(id){
        return this._db[this._ingreso].findAll({
            include: [
                {model:this._db.Sucursal},
                {model:this._db.Usuario},
                {model: this._db.RespaldoIngresoInmobiliaria },
            ],
            where: {id},
        });
    }
}
module.exports=IngresoInmobiliariaRepository;