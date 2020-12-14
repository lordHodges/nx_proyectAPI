const BaseBusiness = require("../base.business");

class BancoBusiness extends BaseBusiness {
	constructor({ BancoRepository, ProyectoAgrofirmaRepository }) {
		super(BancoRepository);
		this._repository = BancoRepository;
		this._proyectoRepository = ProyectoAgrofirmaRepository;
	}
	async obtenerBancos() {
		// !constante proporocionadad por vendor;
		const apikey = "c8b52b79646eac7c8123dcede2c718a0c27e54f4";
		const formato = "json";
		const apiUrl =
			"https://api.sbif.cl/api-sbifv3/recursos_api/balances/2020/10/instituciones?apikey=c8b52b79646eac7c8123dcede2c718a0c27e54f4&formato=json";
		// !TODO Agregar repository functions to get Bancos;
		const bancos = await this._repository.ObtenerListaBancosVigentes(apiUrl);
		return bancos;
	}
	async persistirListaBancos() {
		let banco = {};
		let bancos = [];
		bancos = await this.obtenerBancos();
		/* for (let index = 0; index < array.length; index++) {
			const element = array[index];
		} */
		bancos["DescripcionesCodigosDeInstituciones"].forEach(async (bancoO) => {
			banco.NombreInstitucion = bancoO.NombreInstitucion;

			await this._repository.create(banco);
		});
		return await this.obtenerBancosDB();
	}
	async obtenerBancosDB() {
		const bancos = await this._repository.getAll();
		return bancos;
	}
	async registrarCuentasBancarias(cuenta) {
		const cuentaCreate = await this._repository.registrarCuentasBancarias(
			cuenta
		);
		return cuentaCreate;
	}
	async obtenerCuentasByEntity(idEntity) {
		const cuentas = await this._repository.obtenerCuentasByEntity(idEntity);
		return cuentas;
	}
}
module.exports = BancoBusiness;
