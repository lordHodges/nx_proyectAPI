const BaseRepository = require("../base.repository");

class EgresoRentacarRepository extends BaseRepository {
	constructor({ db }) {
		super(db, "EgresoRentacar");
		this._db = db;
		this._model = "EgresoRentacar";
	}
	async getAllWithJoins() {
		return await this._db[this._model].findAll({
			include: [
				{ model: this._db.Sucursal },
				{ model: this._db.Usuario },
				{ model: this._db.RespaldoEgreso },
			],
		});
	}
	async createWithRespaldos(egreso) {
		return await this._db[this._model].create(egreso, {
			include: [this._db.RespaldoEgreso],
		});
	}
	async getOneWithJoin(id) {
		return await this._db[this._model].findAll({
			include: [
				{ model: this._db.Sucursal },
				{ model: this._db.Usuario },
				{ model: this._db.RespaldoEgreso },
			],
			where: { id },
		});
	}
}
module.exports = EgresoRentacarRepository;
