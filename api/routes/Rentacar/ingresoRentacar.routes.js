const { Router } = require("express");

module.exports = function ({ IngresoRentacarController }) {
	const router = Router();

	router.get(
		"/arriendos",
		IngresoRentacarController.getArriendos.bind(IngresoRentacarController)
	);
	router.get(
		"/detallePago/:idArriendo",
		IngresoRentacarController.getDetallePagos.bind(IngresoRentacarController)
	);

	return router;
};
