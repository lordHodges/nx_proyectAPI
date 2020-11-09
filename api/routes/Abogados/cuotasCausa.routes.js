const { Router } = require("express");
module.exports = function ({ CuotasCausaController }) {
	const router = Router();

	router.put(
		"/:idCuota",
		CuotasCausaController.registrarPago.bind(CuotasCausaController)
	);

	return router;
};
