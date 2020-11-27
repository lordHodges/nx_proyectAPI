const BaseService = require("../base.service");

class ContratoClienteAbogadoService extends BaseService {
	constructor({ ContratoClienteAbogadoBusiness }) {
		super(ContratoClienteAbogadoBusiness);
		this._contratoBusiness = ContratoClienteAbogadoBusiness;
	}
	async getContratos() {
		const contratos = await this._contratoBusiness.getContratos();
		return contratos;
	}
	async crearContratoSinoExiste(contrato) {
		const [
			respuesta,
			contratoR,
		] = await this._contratoBusiness.crearContratoSinoExiste(contrato);
		return [respuesta, contratoR];
	}
	async agregarCausasAContrato(arrayCausa) {
		const causasCreadas = await this._contratoBusiness.agregarCausasAContrato(
			arrayCausa
		);
		return causasCreadas;
	}

	async obtenerContratosPorCliente(idCliente) {
		const contratos = await this._contratoBusiness.obtenerContratosPorCliente(
			idCliente
		);
		return contratos;
	}
	async obtenerContratosPorNumero(idContrato) {
		const contratos = await this._contratoBusiness.obtenerContratosPorNumero(
			idContrato
		);
		return contratos;
	}
}
module.exports = ContratoClienteAbogadoService;
