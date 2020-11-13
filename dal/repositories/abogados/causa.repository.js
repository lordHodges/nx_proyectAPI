const BaseRepository = require("../base.repository");

class CausaRepository extends BaseRepository {
	constructor({ db }) {
		super(db, "Causa");
		this._db = db;
	}
	async crearAGranel(arrayCausas) {
		const causasCreadas = await this._db.Causa.bulkCreate(arrayCausas);
		return causasCreadas;
	}
}

module.exports = CausaRepository;
