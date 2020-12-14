const BaseBusiness = require("../base.business");

class ProyectoAgrofirmaBusiness extends BaseBusiness {
	constructor({ ProyectoAgrofirmaRepository }) {
		super(ProyectoAgrofirmaRepository);
		this._repository = ProyectoAgrofirmaRepository;
	}
	async crearProyecto() {}
	async obtenerProyectos() {}
	async obtenerProyecto() {}
	async modificarProyecto() {}
	async eliminarProyecto() {}
	async cambiarEstadoProyecto() {}
	async agregarInversionistas() {}
}
module.exports = ProyectoAgrofirmaBusiness;

//? se debe plantear modelo de negocio
//? en el contexto de agrofirma existen proyectos de inversion como el de las ceresas, donde un grupo de inversionistas participan de este proyecto como benefactores,
//? los cuales possen distintos porcentajes de participacion.
