const BaseRepository = require("../base.repository");

class EgresoAgrofirmaRepository extends BaseRepository {
	constructor({ db }) {
		super(db, "EgresoAgrofirma");
		this._db = db;
		this._model = "EgresoAgrofirma";
	}
	async obtenerEgresos(id) {
		const egresos = await this._db[this._model].findAll({
			include: [
				{ model: this._db.ProyectoAgrofirma },
				{ model: this._db.Usuario },
				{ model: this._db.RespaldoEgreso },
			],
			where: { idProyecto: id },
		});
		return egresos;
	}
	async obtenerEgreso(id) {
		const egreso = await this._db[this._model].findOne({
			include: [
				{ model: this._db.ProyectoAgrofirma },
				{ model: this._db.Usuario },
				{ model: this._db.RespaldoEgreso },
			],
			where: { id },
		});
		return egreso;
	}
	async registrarEgreso(egreso) {
		const egresoCreated = await this._db[this._model].create(egreso, {
			include: [this._db.RespaldoEgreso],
		});
		return egresoCreated;
	}
}
module.exports = EgresoAgrofirmaRepository;
