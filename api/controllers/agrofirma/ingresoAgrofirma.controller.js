class IngresoAgrofirmaController {
	constructor({ IngresoAgrofirmaService }) {
		this._service = IngresoAgrofirmaService;
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
	async registrarIngreso(req, res) {
		const { body } = req;
		try {
			const ingreso = await this._service.registrarIngreso(body);
			return res.status(200).send(ingreso);
		} catch (error) {
			console.log(error);
			return res.status(500).send({ error });
		}
	}
	async obtenerIngresos(req, res) {
		try {
			const ingreso = await this._service.obtenerIngresos();
			return res.status(200).send(ingreso);
		} catch (error) {
			console.log(error);
			return res.status(500).send(error);
		}
	}
	async obtenerIngreso(req, res) {
		const { id } = req.params;
		try {
			const ingreso = await this._service.obtenerIngreso(id);
			return res.status(200).send(ingreso);
		} catch (error) {
			return res.status(500).send({ error });
		}
	}
	async obtenerIngresoByProyecto(req, res) {
		const { id } = req.params;
		try {
			const ingresos = await this._service.obtenerIngresoByProyecto(id);
			return res.status(200).send(ingresos);
		} catch (error) {
			console.log(error);
			return res.status(500).send({ error });
		}
	}
}
module.exports = IngresoAgrofirmaController;
