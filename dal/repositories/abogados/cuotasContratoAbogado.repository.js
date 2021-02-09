const BaseRepository = require("../base.repository");
class CuotasContratoAbogadoRepository extends BaseRepository {
	constructor({ db }) {
		super(db, "CuotasContrato");
		this._db = db;
	}
	async crearAGranel(arrayCuotas) {
		const cuotasCreadas = await this._db.CuotasContrato.bulkCreate(arrayCuotas);
		return cuotasCreadas;
	}

	async registrarPago(idCuota, estado) {
		const cuota = await this._db.CuotasContrato.update(
			{ estado: estado },
			{ where: { id: idCuota } }
		);
		return cuota;
	}
	async agregarRespaldos(arrayRespaldos) {
		const respaldoCuotas = await this._db.RespaldoIngreso.bulkCreate(
			arrayRespaldos
		);
		return respaldoCuotas;
	}
	async obtenerRespaldos(id) {
		const respaldoCuotas = await this._db.RespaldoIngreso.findAll({
			where: { idCuotaFirma: id },
		});
		return respaldoCuotas;
	}
}
module.exports = CuotasContratoAbogadoRepository;
