const { Router } = require('express');

module.exports = function ({ GetIngresosEgresosController }) {
	const router = Router();

    router.get(
		'/obtenerIngresos',
		GetIngresosEgresosController.obtenerIngresosEmpresas.bind(GetIngresosEgresosController)
	);
    router.get(
		'/obtenerEgresos',
		GetIngresosEgresosController.obtenerEgresosEmpresas.bind(GetIngresosEgresosController)
	);
	router.get('/obtenerIngresosMensuales/:year', GetIngresosEgresosController.obtenerIngresosMensuales.bind(GetIngresosEgresosController));
	

	return router;
};


