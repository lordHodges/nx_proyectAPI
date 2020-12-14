class ProyectoAgrofirmaController {
	constructor({ ProyectoAgrofirmaService }) {
		this._service = ProyectoAgrofirmaService;
	}
	async obtenerProyectos(req, res) {
		const proyectos = await this._service.getAll();

		return res.status(200).send(proyectos);
	}
	async crearProyecto(req, res) {
		const { body } = req;
		const proyecto = await this._service.create(body);

		return res.status(201).send(proyecto);
	}
	async obtenerProyecto(req, res) {
		const { id } = req.params;
		try {
			const proyecto = await this._service.get(id);
			return res.status(200).send(proyecto);
		} catch (error) {
			return res.status(500).send(error);
		}
	}
	async actualizarProyecto(req, res) {
		const { id } = req.params;
		const { body } = req;
		const updated = this._service.update(id, body);
		return res.status(200).send();
	}
}
module.exports = ProyectoAgrofirmaController;
