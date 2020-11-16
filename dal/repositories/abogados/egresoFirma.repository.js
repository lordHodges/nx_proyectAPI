const BaseRepository = require("../base.repository");

class EgresoFirmaRepository extends BaseRepository {
	constructor({ db }) {
		super(db, "EgresoFirma");
		this._db = db;
		this._egreso = "EgresoFirma";
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
module.exports = EgresoFirmaRepository;
