const { Router } = require("express");

module.exports = function ({ EgresoHostalController }) {
  const router = Router();

  /* router.get(
    "/",
    EgresoHostalController.getEgresos.bind(EgresoHostalController)
  );

  router.get(
    "/:id",
    EgresoHostalController.getEgreso.bind(EgresoHostalController)
  );
  router.post(
    "/",
    EgresoHostalController.createEgreso.bind(EgresoHostalController)
  ); */
  router.post(
    "/conRespaldo",
    EgresoHostalController.createEgresoWithRespaldo.bind(EgresoHostalController)
  );
  /*  router.put(
    "/:id",
    EgresoHostalController.updateEgreso.bind(EgresoHostalController)
  );
  router.delete(
    "/:id",
    EgresoHostalController.deleteEgreso.bind(EgresoHostalController)
  ); */

  return router;
};
