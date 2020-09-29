const { Router } = require("express");

module.exports = function ({ IngresoHostalController }) {
  const router = Router();

  router.get(
    "/",
    IngresoHostalController.getIngresos.bind(IngresoHostalController)
  );
  router.get(
    "/:id",
    IngresoHostalController.getIngreso.bind(IngresoHostalController)
  );
  router.post(
    "/",
    IngresoHostalController.createIngreso.bind(IngresoHostalController)
  );
  router.put(
    "/:id",
    IngresoHostalController.updateIngreso.bind(IngresoHostalController)
  );
  router.delete(
    "/:id",
    IngresoHostalController.deleteIngreso.bind(IngresoHostalController)
  );
  return router;
};
