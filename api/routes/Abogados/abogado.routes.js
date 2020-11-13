const { Router } = require("express");

module.exports = function ({ AbogadoController }) {
	const router = Router();

	router.get("/", AbogadoController.getAbogados.bind(AbogadoController));

	router.get("/:id", AbogadoController.getAbogado.bind(AbogadoController));

	router.post("/", AbogadoController.createAbogado.bind(AbogadoController));
	router.put("/:id", AbogadoController.updateAbogado.bind(AbogadoController));
	router.delete(
		"/:id",
		AbogadoController.deleteAbogado.bind(AbogadoController)
	);

	return router;
};
