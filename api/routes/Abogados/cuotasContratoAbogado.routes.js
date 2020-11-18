const { Router } = require("express");
module.exports = function ({ CuotasContratoAbogadoController }) {
	const router = Router();

	router.post(
		"/",
		CuotasContratoAbogadoController.crearCuotas.bind(
			CuotasContratoAbogadoController
		)
	);
	router.post(
		"/registrarPago",
		CuotasContratoAbogadoController.registrarPago.bind(
			CuotasContratoAbogadoController
		)
	);
	router.post(
		"/calcularCuotas",
		CuotasContratoAbogadoController.calcularCuotas.bind(
			CuotasContratoAbogadoController
		)
	);

	router.post(
		"/repactarContrato",
		CuotasContratoAbogadoController.repactarContrato.bind(
			CuotasContratoAbogadoController
		)
	);

	return router;
};
