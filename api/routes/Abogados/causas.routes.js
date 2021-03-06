const { Router } = require("express");
module.exports = function ({ CausaController }) {
	const router = Router();

	router.post(
		"/crearSinoExiste/:codigo",
		CausaController.crearCausaSinoExiste.bind(CausaController)
	);

	router.post("/", CausaController.guardarCausa.bind(CausaController));
	router.post(
		"/asignarEquipo",
		CausaController.asignarEquipo.bind(CausaController)
	);
	router.get(
		"/:idCliente",
		CausaController.getCausasPorCliente.bind(CausaController)
	);
	router.get(
		"/mostrarUna/:idCausa",
		CausaController.getCausa.bind(CausaController)
	);
	router.get(
		"/causaConCuota/:idCausa",
		CausaController.getCausaConCuota.bind(CausaController)
	);
	return router;
};
