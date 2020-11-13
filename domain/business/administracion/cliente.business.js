const BaseBusiness = require("../base.business");

class ClienteBusiness extends BaseBusiness {
	constructor({ ClienteRepository }) {
		super(ClienteRepository);
		this._clienteRepository = ClienteRepository;
	}
	async crearSinoExiste(rut) {
		const [cliente, created] = await this._clienteRepository.crearSinoExiste(
			rut
		);
		return [cliente, created];
	}
	async guardarCliente(rut, cliente) {
		const guardado = await this._clienteRepository.guardarCliente(rut, cliente);
		return guardado;
	}
	async agregarCausaCliente() {}
}
module.exports = ClienteBusiness;
