const BaseRepository = require("../base.repository");

class EgresoInmobiliariaRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "EgresoInmobiliaria");
    this._db = db;
    this._egreso = "EgresoInmobiliaria";
  }
  getAllWithJoins() {
    return this._db[this._egreso].findAll({
      include: [
        { model: this._db.Sucursal },
        { model: this._db.Usuario },
        { model: this._db.RespaldoEgresoInmobiliaria},
      ],
    });
  }
  createWithRespaldos(entity) {
    return this._db[this._egreso].create(entity, {
      include: [this._db.RespaldoEgresoInmobiliaria],
    });
  }
  async getOneWithJoin(id) {
    return this._db[this._egreso].findAll({
      include: [
        { model: this._db.Sucursal },
        { model: this._db.Usuario },
        { model: this._db.RespaldoEgresoInmobiliaria },
      ],
      where: { id },
    });
  }
}

module.exports = EgresoInmobiliariaRepository;
