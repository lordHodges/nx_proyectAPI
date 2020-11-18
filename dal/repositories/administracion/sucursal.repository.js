const BaseRepository = require("../base.repository");

class SucursalRepository extends BaseRepository {
	constructor({ db }) {
		super(db, "Sucursal");
		this._db = db;
		this.sucursal = "Sucursal";
	}
	getByEmpresa(idEmpresa) {
		return this._db[this.sucursal].findAll({
			where: { idEmpresa },
		});
	}
}

module.exports = SucursalRepository;
