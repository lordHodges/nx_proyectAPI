const BaseRepository = require("../base.repository");

class ContratoClienteAbogadoRepository extends BaseRepository {
	constructor({ db }) {
		super(db, "ContratoClienteAbogado");
		this._db = db;
	}
	async getContratos() {
		const contratos = await this._db.ContratoClienteAbogado.findAll({
			include: [
				{ model: this._db.Cliente },
				{ model: this._db.Causa },
				{ model: this._db.Sucursal },
				{ model: this._db.Usuario },
			],
			raw: false,
		});
		return contratos;
	}
	async buscarPorNumero(nContrato) {
		const contratoEncontrado = await this._db.ContratoClienteAbogado.findOne({
			where: { nContrato: nContrato },
		});
		return contratoEncontrado;
	}
	async obtenerContratosPorCliente(idCliente) {
		const contratos = await this._db.ContratoClienteAbogado.findAll({
			include: [
				{ model: this._db.Cliente },
				{ model: this._db.Causa },
				{ model: this._db.Sucursal },
				{ model: this._db.Usuario },
			],
			where: { idCliente: idCliente },
		});
		return contratos;
	}
	async obtenerContratosPorNumero(nContrato) {
		const contratos = await this._db.ContratoClienteAbogado.findOne({
			include: [
				{ model: this._db.Cliente },
				{ model: this._db.Causa },
				{ model: this._db.Sucursal },
				{ model: this._db.Usuario },
				{ model: this._db.CuotasContrato },
			],
			where: { nContrato: nContrato },
		});
		return contratos;
	}
	async descontarSaldoContrato(idContrato, montoDescontado) {
		const res = await this._db.ContratoClienteAbogado.update(
			{ saldoPendiente: montoDescontado },
			{ where: { id: idContrato } }
		);
		return res;
	}
	async actuaizarEstado(idContrato, estado) {
		await this._db.ContratoClienteAbogado.update(
			{ estadoPago: estado },
			{ where: { id: idContrato } }
		);
		return "ok";
	}
}
module.exports = ContratoClienteAbogadoRepository;
