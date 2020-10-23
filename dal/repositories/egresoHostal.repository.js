const { EgresoHostal } = require("../../domain/models");
const BaseRepository = require("./base.repository");

class EgresoHostalRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "EgresoHostal");
    this._db = db;
    this._egreso = "EgresoHostal";
  }
  getAllWithJoins() {
    return this._db[this._egreso].findAll({
      include: [
        { model: this._db.Sucursal },
        { model: this._db.Usuario },
        { model: this._db.RespaldoEgreso },
      ],
    });
  }
  createWithRespaldos(entity) {
    return this._db[this._egreso].create(entity, {
      include: [this._db.RespaldoEgreso],
    });
  }
  async getOneWithJoin(id) {
    return this._db[this._egreso].findAll({
      include: [
        { model: this._db.Sucursal },
        { model: this._db.Usuario },
        { model: this._db.RespaldoEgreso },
      ],
      where: { id },
    });
  }
}

module.exports = EgresoHostalRepository;
