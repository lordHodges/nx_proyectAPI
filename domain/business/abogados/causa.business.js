const BaseBusiness = require("../base.business");
const { EquipoAbogado } = require("../../models");
class CausaBusiness extends BaseBusiness {
	constructor({ CausaRepository, EquipoRepository }) {
		super(CausaRepository, EquipoRepository);
		this._causaRepository = CausaRepository;
		this._equpoRepository = EquipoRepository;
	}
	async crearAGranel(arrayCausas) {
		const causasCreadas = await this._causaRepository.crearAGranel(arrayCausas);
		return causasCreadas;
	}
	async asignarEquipo(idCausa, arrayEquipo) {
		const equipos = [];

		arrayEquipo.forEach((x) => {
			const equipo = new EquipoAbogado();
			equipo.idCausa = idCausa;
			equipo.idAbogado = x;
			equipos.push(equipo);
		});

		const equiposCreados = await this._equpoRepository.crearAGranel(equipos);
		return equiposCreados;
	}
}
module.exports = CausaBusiness;
