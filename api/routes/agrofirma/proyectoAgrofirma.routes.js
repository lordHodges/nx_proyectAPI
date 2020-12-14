const { Router } = require("express");

module.exports = function ({ ProyectoAgrofirmaController }) {
	const router = Router();

	router.post(
		"/registrarProyecto",
		ProyectoAgrofirmaController.crearProyecto.bind(ProyectoAgrofirmaController)
	);

	router.get(
		"/obtenerProyectos",
		ProyectoAgrofirmaController.obtenerProyectos.bind(
			ProyectoAgrofirmaController
		)
	);
	router.get(
		"/obtenerProyecto/:id",
		ProyectoAgrofirmaController.obtenerProyecto.bind(
			ProyectoAgrofirmaController
		)
	);
	router.put(
		"/actualizarProyecto/:id",
		ProyectoAgrofirmaController.actualizarProyecto.bind(
			ProyectoAgrofirmaController
		)
	);

	return router;
};
