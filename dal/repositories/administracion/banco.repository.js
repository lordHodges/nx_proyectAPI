const BaseRepository = require("../base.repository");

class BancoRepository extends BaseRepository {
	constructor({ RequestApiHelper, db }) {
		super(db, "Banco");
		this._request = RequestApiHelper;
	}
	async ObtenerListaBancosVigentes(url) {
		try {
			return await this._request.make_API_call(url);
		} catch (error) {
			const msje = "algo anda mal, pongase en contacto con el Administrador";

			return { error, msje };
		}
	}
	async registrarCuentasBancarias(cuenta) {
		const cuentaCreated = await this._db["CuentasProyecto"].create(cuenta);
		return cuentaCreated;
	}
	async registrarCuentasSucursal(cuenta) {
		const cuentaCreated = await this._db["CuentasSucursal"].create(cuenta);
		return cuentaCreated;
	}
	async obtenerCuentasByEntity(idEntity) {
		const cuentas = await this._db["CuentasProyecto"].findAll({
			include: [{ model: this._db.Banco }],
			where: { idProyecto: idEntity },
		});
		return cuentas;
	}
}
module.exports = BancoRepository;
