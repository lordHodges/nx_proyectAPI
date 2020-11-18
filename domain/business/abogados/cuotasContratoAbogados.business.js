const BaseBusiness = require("../base.business");
const CuotaContrato = require("../../models/cuotaContrato");
const moment = require("moment");
class CuotasContratoAbogadoBusiness extends BaseBusiness {
	constructor({
		CuotasContratoAbogadoRepository,
		ContratoClienteAbogadoBusiness,
	}) {
		super(CuotasContratoAbogadoRepository);
		this._cuotasRepository = CuotasContratoAbogadoRepository;
		this._contratoBusiness = ContratoClienteAbogadoBusiness;
	}
	async crearAGranel(arrayCuotas) {
		arrayCuotas.forEach((cuota) => {
			cuota.estado = "pendiente";
		});
		const cuotasCreadas = await this._cuotasRepository.crearAGranel(
			arrayCuotas
		);
		return cuotasCreadas;
	}
	async registrarPago(idcuota) {
		const estado = "pagado";
		const cuota = await this._cuotasRepository.get(idcuota);
		if (cuota.estado == "pagado") {
			return "esta cuota ya se encuentra pagada, pongase en contacto con el administrador";
		} else {
			await this._cuotasRepository.registrarPago(idcuota, estado);
			const resp = await this._contratoBusiness.decontarSaldoContrato(
				cuota.idContrato,
				cuota.montoCuota
			);
			if (resp) {
				return "Cuota pagada con exito, saldo descontado";
			} else {
				return "tenemos problemas, pongase en contacto con el administrador";
			}
		}
	}
	async repactarContrato(excuotas, newcuotas) {
		for (let i = 0; i < excuotas.length; i++) {
			const idcuota = excuotas[i].id;
			await this._cuotasRepository.delete(idcuota);
		}
		const cuotas = await this.crearAGranel(newcuotas);
		return cuotas;
	}
	async calcularCuotas(idContrato, nCuotas, montoInicial, fechaInicio) {
		const contrato = await this._contratoBusiness.get(idContrato);

		const montoCuota = Math.trunc(
			(contrato.saldoPendiente - montoInicial) / (nCuotas - 1)
		);
		const cuotas = [];

		for (let i = 0; i < nCuotas; i++) {
			const cuota = new CuotaContrato();
			const fechaM = moment(fechaInicio, "YYYY-MM-DD").locale("es-mx");

			if (i != 0) {
				cuota.idContrato = idContrato;
				cuota.estadoPago = "pendiente";
				cuota.fechaPago = fechaM.add(i, "months").format("DD-MMMM-YYYY");
				cuota.montoCuota = montoCuota;
				cuotas.push(cuota);
			} else {
				cuota.idContrato = idContrato;
				cuota.estadoPago = "pendiente";
				cuota.fechaPago = fechaM.add(i, "months").format("DD-MMMM-YYYY");
				cuota.montoCuota = montoInicial;
				cuotas.push(cuota);
			}
		}
		let sumaCuotas = 0;
		cuotas.forEach((cuota) => {
			sumaCuotas = sumaCuotas + cuota.montoCuota;
		});

		if (sumaCuotas < contrato.saldoPendiente) {
			const ctrl = nCuotas - 1;
			const ctrl2 = cuotas[ctrl].montoCuota;
			cuotas[ctrl].montoCuota = ctrl2 + (contrato.saldoPendiente - sumaCuotas);
		}

		return cuotas;
	}
}
module.exports = CuotasContratoAbogadoBusiness;
