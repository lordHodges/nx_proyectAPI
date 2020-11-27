const BaseBusiness = require("../base.business");

class ContratoClienteAbogadoBusiness extends BaseBusiness {
	constructor({ ContratoClienteAbogadoRepository, CausaBusiness }) {
		super(ContratoClienteAbogadoRepository, CausaBusiness);
		this._contratoRepository = ContratoClienteAbogadoRepository;
		this._causaBusiness = CausaBusiness;
	}
	//requiere todos los contratos
	async getContratos() {
		const contratos = await this._contratoRepository.getContratos();

		contratos.forEach((contrato) => {
			contrato["dataValues"]["cliente"] = contrato["Cliente"]["nombre"];
			contrato["dataValues"]["clienteRut"] = contrato["Cliente"]["rut"];
			contrato["dataValues"]["sucursal"] = contrato["Sucursal"]["razonSocial"];
			contrato["dataValues"]["usuario"] = contrato["Usuario"]["nombre"];
		});

		return contratos;
	}

	//guarda un contrato si no existe, si existe devuielve existente,
	async crearContratoSinoExiste(contrato) {
		let respuesta;

		respuesta = "contrato Creado Con Exito";
		const contratoCreado = await this._contratoRepository.create(contrato);
		return [respuesta, contratoCreado];
	}
	//guarda un listado de causas de un contrato
	async agregarCausasAContrato(arrayCausas) {
		const causasCreadas = await this._causaBusiness.crearAGranel(arrayCausas);
		return causasCreadas;
	}
	//devuelve un array de cuotas calculadas

	//TODO continuar logicas propuestas

	async obtenerContratosPorCliente(idCLiente) {
		const contratos = await this._contratoRepository.obtenerContratosPorCliente(
			idCLiente
		);
		return contratos;
	}
	async obtenerContratosPorNumero(idContrato) {
		const contratos = await this._contratoRepository.obtenerContratosPorNumero(
			idContrato
		);
		return contratos;
	}
	async decontarSaldoContrato(idContrato, montoCuota) {
		const contrato = await this._contratoRepository.get(idContrato);
		const montoActual = contrato.saldoPendiente;
		const montoADescontar = montoCuota;
		const montoDescontado = montoActual - montoADescontar;

		await this._contratoRepository.descontarSaldoContrato(
			idContrato,
			montoDescontado
		);
		const contratoP = await this._contratoRepository.get(contrato.id);
		if (contratoP.saldoPendiente == 0) {
			const estado = "pagado";
			await this._contratoRepository.actuaizarEstado(contratoP.id, estado);
		}

		return true;
	}

	async notificarMoroso() {}
}
module.exports = ContratoClienteAbogadoBusiness;
