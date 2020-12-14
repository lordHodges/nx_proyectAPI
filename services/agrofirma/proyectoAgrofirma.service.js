const { ProyectoAgrofirmaBusiness } = require("../../domain/business");
const BaseService = require("../base.service");

class ProeyectoAgrofirmaService extends BaseService {
	constructor({ ProyectoAgrofirmaBusiness }) {
		super(ProyectoAgrofirmaBusiness);
		this._business = ProyectoAgrofirmaBusiness;
	}
}
module.exports = ProeyectoAgrofirmaService;
