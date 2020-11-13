const BaseRepository = require("../base.repository");

class EquipoRepository extends BaseRepository {
	constructor({ db }) {
		super(db, "Equipo");
		this._db = db;
	}
	async crearAGranel(arrayEquipo) {
		const equipoCreado = await this._db.Equipo.bulkCreate(arrayEquipo);
		return equipoCreado;
	}
}
module.exports = EquipoRepository;
