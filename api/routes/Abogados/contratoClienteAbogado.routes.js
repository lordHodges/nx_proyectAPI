const { Router } = require("express");
module.exports = function ({ ContratoClienteAbogadoController }) {
	const router = Router();

	router.post(
		"/",
		ContratoClienteAbogadoController.crearContratoSinoExiste.bind(
			ContratoClienteAbogadoController
		)
	);
	router.post(
		"/agregarCausas",
		ContratoClienteAbogadoController.agregarCausasAContrato.bind(
			ContratoClienteAbogadoController
		)
	);
	router.get(
		"/getContratos",
		ContratoClienteAbogadoController.getContratos.bind(
			ContratoClienteAbogadoController
		)
	);

	router.get(
		"/contratosCliente/:idCliente",
		ContratoClienteAbogadoController.obtenerContratosPorCliente.bind(
			ContratoClienteAbogadoController
		)
	);
	router.get(
		"/contratosNumero/:idContrato",
		ContratoClienteAbogadoController.obtenerContratosPorNumero.bind(
			ContratoClienteAbogadoController
		)
	);

	return router;
};
