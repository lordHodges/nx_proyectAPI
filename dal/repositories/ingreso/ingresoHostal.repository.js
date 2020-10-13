const BaseRepository = require("../base.repository");

class IngresoHostalRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "IngresoHostal");
    this._db = db;
    this._ingreso = "IngresoHostal";
  }
  getAllWithJoin() {
    return this._db[this._ingreso].findAll({
      include: [{ model: this._db.Usuario }, { model: this._db.Sucursal }],
    });
  }
}
module.exports = IngresoHostalRepository;
