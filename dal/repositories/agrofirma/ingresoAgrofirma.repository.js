const BaseRepository = require("../base.repository");

class IngresoAgrofirmaRepository extends BaseRepository {
	constructor({ db }) {
		super(db, "IngresoAgrofirma");
		this._db = db;
		this._entidad = "IngresoAgrofirma";
	}
	async obtenerIngresos() {
		const ingresos = await this._db[this._entidad].findAll({
			include: [
				{ model: this._db.Usuario },
				{ model: this._db.ProyectoAgrofirma },
				{ model: this._db.RespaldoIngreso },
				{ model: this._db.CuentasProyecto },
			],
		});

		return ingresos;
	}
	async obtenerIngreso(id) {
		const ingresos = await this._db[this._entidad].findOne({
			where: { id },
			include: [
				{ model: this._db.Usuario },
				{ model: this._db.RespaldoIngreso },
				{ model: this._db.ProyectoAgrofirma },
				{ model: this._db.CuentasProyecto },
			],
		});

		return ingresos;
	}
	async obtenerIngresoByProyecto(id) {
		const ingresos = await this._db[this._entidad].findAll({
			where: { idProyecto: id },
			include: [
				{ model: this._db.Usuario },
				{ model: this._db.RespaldoIngreso },
				{ model: this._db.ProyectoAgrofirma },
				{ model: this._db.CuentasProyecto },
			],
		});
		return ingresos;
	}

	// ?quizas no sea necesario
	async registrarIngreso(entity) {
		const ingresos = await this._db[this._entidad].create(entity, {
			include: [this._db.RespaldoIngreso],
		});
		return ingresos;
	}
}
module.exports = IngresoAgrofirmaRepository;
