const { Router } = require('express');

module.exports = function ({ CuentasRegistradasController }) {
	const router = Router();

	router.post(
		'/registrarCuenta',
		CuentasRegistradasController.registrarCuentas.bind(CuentasRegistradasController)
	);
	router.get(
		'/obtenerCuentas',
		CuentasRegistradasController.obtenerCuentas.bind(CuentasRegistradasController)
	);
	router.put("/updateCuenta/:idCuenta", CuentasRegistradasController.updateCuenta.bind(CuentasRegistradasController));



	return router;
};
