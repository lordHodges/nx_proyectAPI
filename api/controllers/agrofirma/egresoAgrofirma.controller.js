class EgresoAgrofirmaController {
	constructor({ EgresoAgrofirmaService }) {
		this._service = EgresoAgrofirmaService;
	}
	async obtenerEgresos(req, res) {
		const { idProyecto } = req.params;
		const egresos = await this._service.obtenerEgresos(idProyecto);
		return res.status(200).send(egresos);
	}
	async obtenerEgreso(req, res) {
		const { id } = req.params;
		const egreso = await this._service.obtenerEgreso(id);
		return res.status(200).send(egreso);
	}
	async registrarEgreso(req, res) {
		const { body } = req;
		const egresoCreated = await this._service.registrarEgreso(body);
		return res.status(200).send(egresoCreated);
	}

	async upload(req, res) {
		if (!req.file) {
			console.log("No file received");
			return res.send({
				success: false,
			});
		} else {
			console.log("file received successfully");
			setTimeout(() => {
				return res.status(200).send(req.file.filename);
			}, 2000);
		}
	}
}
module.exports = EgresoAgrofirmaController;
