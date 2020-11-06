const { Router } = require("express");
module.exports = function ({ CuotasCausaController }) {
	const router = Router();

	router.post(
		"/:idCausa",
		CuotasCausaController.registrarPago.bind(CuotasCausaController)
	);

	return router;
};
