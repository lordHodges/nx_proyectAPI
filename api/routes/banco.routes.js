const { Router } = require("express");

module.exports = function ({ BancoController }) {
	const router = Router();

	router.post(
		"/persistirListaBancos",
		BancoController.persistirListaBancos.bind(BancoController)
	);

	router.get("/getBancos", BancoController.getBancos.bind(BancoController));

	return router;
};
