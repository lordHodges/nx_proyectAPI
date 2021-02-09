const BaseService = require("../base.service");
class CuotasContratoAbogadoService extends BaseService {
	constructor({ CuotasContratoAbogadoBusiness }) {
		super({ CuotasContratoAbogadoBusiness });
		this.cuotaBusiness = CuotasContratoAbogadoBusiness;
	}
	async crearAGranel(arrayCuotas) {
		const cuotasCreadas = await this.cuotaBusiness.crearAGranel(arrayCuotas);
		return cuotasCreadas;
	}
	async registrarPago(idcuota) {
		const cuota = await this.cuotaBusiness.registrarPago(idcuota);
		return cuota;
	}
	async calcularCuotas(idContrato, nCuotas, montoInicial, fechaInicio) {
		const cuotas = await this.cuotaBusiness.calcularCuotas(
			idContrato,
			nCuotas,
			montoInicial,
			fechaInicio
		);
		return cuotas;
	}
	async repactarContrato(excuotas, newcuotas) {
		const cuotas = await this.cuotaBusiness.repactarContrato(
			excuotas,
			newcuotas
		);
		return cuotas;
	}
	async obtenerCuotas() {
		const cuotas = await this.cuotaBusiness.getAll();
		return cuotas;
	}
	async agregarRespaldos(arrayRespaldos) {
		const respaldoCuotas = await this.cuotaBusiness.agregarRespaldos(
			arrayRespaldos
		);
		return respaldoCuotas;
	}
	async obtenerRespaldos(id) {
		const respaldoCuotas = await this.cuotaBusiness.obtenerRespaldos(id);

		return respaldoCuotas;
	}
}
module.exports = CuotasContratoAbogadoService;
