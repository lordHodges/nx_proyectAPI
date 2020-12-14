const BaseRepository = require("../base.repository");

class ProyectoAgrofirmaRepository extends BaseRepository {
	constructor({ db }) {
		super(db, "ProyectoAgrofirma");
		this._db = db;
	}
	async obtenerCuentasProyecto(idProyecto) {
		const cuentas = await this._db.ProyectoAgrofirma.findOne({
			where: { id: idProyecto },
			/* include:[{model:this._db.CuentasProyecto, 
					include:[{model:this._db.Banco}]
				}] */
		});
	}
}
module.exports = ProyectoAgrofirmaRepository;
