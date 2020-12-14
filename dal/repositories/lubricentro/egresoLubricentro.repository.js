const { EgresoHostal } = require("../../../domain/models");
const BaseRepository = require("../base.repository");

class EgresoLubricentroRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "EgresoLubricentro");
    this._db = db;
    this._egreso = "EgresoLubricentro";
  }
  async getAllWithJoins() {
    const egresos = await this._db[this._egreso].findAll({
      include: [
        { model: this._db.Sucursal },
        { model: this._db.Usuario },
        { model: this._db.RespaldoEgresoLubricentro },
      ],
    });
    return egresos;
  }
  createWithRespaldos(entity) {
    return this._db[this._egreso].create(entity, {
      include: [this._db.RespaldoEgresoLubricentro],
    });
  }
  async getOneWithJoin(id) {
    return this._db[this._egreso].findAll({
      include: [
        { model: this._db.Sucursal },
        { model: this._db.Usuario },
        { model: this._db.RespaldoEgresoLubricentro },
        {
          model: this._db.IngresoLubricentro,
          include: [{ model: this._db.Sucursal }, { model: this._db.Usuario }],
        },
      ],
      where: { id },
    });
  }
}

module.exports = EgresoLubricentroRepository;
