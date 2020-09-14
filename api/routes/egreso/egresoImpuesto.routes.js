const { Router } = require("express");

module.exports = function ({ EgresoImpuestoController }) {
  const router = Router();
  router.get(
    "/",
    EgresoImpuestoController.getAll.bind(EgresoImpuestoController)
  );
  router.get(
    "/:id",
    EgresoImpuestoController.get.bind(EgresoImpuestoController)
  );
  router.post(
    "/",
    EgresoImpuestoController.create.bind(EgresoImpuestoController)
  );
  router.put(
    "/:id",
    EgresoImpuestoController.update.bind(EgresoImpuestoController)
  );
  router.delete(
    "/",
    EgresoImpuestoController.delete.bind(EgresoImpuestoController)
  );

  return router;
};
