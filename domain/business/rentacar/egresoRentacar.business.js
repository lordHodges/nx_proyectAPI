const BaseBusiness = require("../base.business");

class EgresoRentacarBusiness extends BaseBusiness {
	constructor({ EgresoRentacarRepository, RentacarIngresosRequestBusiness }) {
		super(EgresoRentacarRepository);
		this._repository = EgresoRentacarRepository;
		this._arriendoBusiness = RentacarIngresosRequestBusiness;
	}
	async createWithRespaldos(egreso) {
		const egresoCreated = await this._repository.createWithRespaldos(egreso);
		return egresoCreated;
	}
	async getAllWithJoins() {
		const egresos = await this._repository.getAllWithJoins();
		return egresos;
	}
	async getOneWithJoin(id) {
		const egreso = await this._repository.getOneWithJoin(id);
		if (!egreso) return null;
		return egreso;
	}
	async getDetalleEgreso(idEgreso) {
		let egreso = {};
		const egresoArray = await this._repository.getOneWithJoin(idEgreso);
		egresoArray.forEach((egresoT) => {
			egreso = egresoT;
		});
		switch (egreso.tipoEgreso) {
			case "Costos":
				const egresoCosto = await this.obtenerdetalleCosto(egreso);
				return egresoCosto;
				break;
			case "Gastos":
				return egreso;
				break;
			case "Remuneraciones":
				return egreso;
				break;
			case "Bancarios":
				return egreso;
				break;
			case "Impuestos":
				return egreso;
				break;

			default:
				break;
		}
	}
	async obtenerdetalleCosto(egreso) {
		const arriendo = await this._arriendoBusiness.getArriendo(
			egreso.idArriendo
		);
		egreso["dataValues"]["estado_arriendo"] = arriendo.data.estado_arriendo;
		egreso["dataValues"]["fechaEntrega_arriendo"] =
			arriendo.data.fechaEntrega_arriendo;
		egreso["dataValues"]["tipo_arriendo"] = arriendo.data.tipo_arriendo;
		egreso["dataValues"]["userAt"] = arriendo.data.userAt;
		egreso["dataValues"]["patente_vehiculo"] = arriendo.data.patente_vehiculo;
		egreso["dataValues"]["marca_vehiculo"] =
			arriendo.data.vehiculo.marca_vehiculo;
		egreso["dataValues"]["modelo_vehiculo"] =
			arriendo.data.vehiculo.modelo_vehiculo;

		return egreso;
	}
}
module.exports = EgresoRentacarBusiness;
