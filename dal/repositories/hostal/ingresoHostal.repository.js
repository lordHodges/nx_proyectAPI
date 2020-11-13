const BaseRepository = require("../base.repository");

class IngresoHostalRepository extends BaseRepository {
	constructor({ db }) {
		super(db, "IngresoHostal");
		this._db = db;
		this._ingreso = "IngresoHostal";
	}
	getAllWithJoins() {
		return this._db[this._ingreso].findAll({
			include: [
				{ model: this._db.Sucursal },
				{ model: this._db.Usuario },
				{ model: this._db.RespaldoIngreso },
			],
		});
	}
	createWithRespaldos(entity) {
		return this._db[this._ingreso].create(entity, {
			include: [this._db.RespaldoIngreso],
		});
	}
	async getOneWithJoin(id) {
		return this._db[this._ingreso].findAll({
			include: [
				{ model: this._db.Sucursal },
				{ model: this._db.Usuario },
				{ model: this._db.RespaldoIngreso },
			],
			where: { id },
		});
	}
}

module.exports = IngresoHostalRepository;
