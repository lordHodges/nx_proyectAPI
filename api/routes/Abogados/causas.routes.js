const { Router } = require("express");
module.exports = function ({ CausaController }) {
	const router = Router();

	router.post(
		"/:codigo",
		CausaController.crearCausaSinoExiste.bind(CausaController)
	);
	//! no descomnetar hasta tener las rutas
	router.post("/", CausaController.guardarCausa.bind(CausaController));

	router.get(
		"/:idCliente",
		CausaController.getCausasPorCliente.bind(CausaController)
	);
	router.get('/mostrarUna/:idCausa', CausaController.getCausa.bind(CausaController));

	return router;
};
