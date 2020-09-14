const { Router } = require("express");
module.exports = function ({ IngresoRentacarController }) {
  const router = Router();
  router.get(
    "/",
    IngresoRentacarController.getIngresos.bind(IngresoRentacarController)
  );
  router.get(
    "/:id",
    IngresoRentacarController.getIngreso.bind(IngresoRentacarController)
  );
  router.post(
    "/",
    IngresoRentacarController.createIngreso.bind(IngresoRentacarController)
  );
  router.put(
    "/:id",
    IngresoRentacarController.updateIngreso.bind(IngresoRentacarController)
  );
  router.delete(
    "/:id",
    IngresoRentacarController.deleteIngreso.bind(IngresoRentacarController)
  );
  return router;
};
