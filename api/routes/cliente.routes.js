const { Router } = require("express");

module.exports = function ({ ClienteController }) {
	const router = Router();

	router.post(
		"/:rut",
		ClienteController.crearClienteSinoExiste.bind(ClienteController)
	);
	router.put("/:rut", ClienteController.guardarCliente.bind(ClienteController));
	router.get(
		"/getClientes",
		ClienteController.getClientes.bind(ClienteController)
	);

	return router;
};
