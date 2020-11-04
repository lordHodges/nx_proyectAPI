const BaseService = require("./base.service");

class Cliente extends BaseService {
	constructor({ ClienteBusiness }) {
		super(ClienteBusiness);
		this._clienteBusiness = ClienteBusiness;
	}
	async crearSinoExiste(rut) {
		const [cliente, created] = await this._clienteBusiness.crearSinoExiste(rut);
		return [cliente, created];
	}
	async guardarCliente(rut, cliente) {
		const guardado = await this._clienteBusiness.guardarCliente(rut, cliente);
		return guardado;
	}
}
module.exports = Cliente;
