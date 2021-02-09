const { Router } = require('express');

module.exports = function ({ BancoController }) {
	const router = Router();

	router.post(
		'/persistirListaBancos',
		BancoController.persistirListaBancos.bind(BancoController)
	);

	router.get('/obtenerBancos', BancoController.getBancos.bind(BancoController));
	router.post(
		'/registrarCuentasBancarias',
		BancoController.registrarCuentasBancarias.bind(BancoController)
	);
	router.get(
		'/obtenerCuentasByEntity/:idEntity',
		BancoController.obtenerCuentasByEntity.bind(BancoController)
	);
	router.get(
		'/obtenerIngresosMensuales',
		BancoController.obtenerIngresosMensuales.bind(BancoController)
	);

	return router;
};
