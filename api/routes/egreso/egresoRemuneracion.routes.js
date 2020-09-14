const { Router } = require("express");

module.exports = function ({ EgresoRemuneracionController }) {
  const router = Router();
  router.get(
    "/",
    EgresoRemuneracionController.getAll.bind(EgresoRemuneracionController)
  );
  router.get(
    "/:id",
    EgresoRemuneracionController.get.bind(EgresoRemuneracionController)
  );
  router.post(
    "/",
    EgresoRemuneracionController.create.bind(EgresoRemuneracionController)
  );
  router.put(
    "/:id",
    EgresoRemuneracionController.update.bind(EgresoRemuneracionController)
  );
  router.delete(
    "/",
    EgresoRemuneracionController.delete.bind(EgresoRemuneracionController)
  );

  return router;
};
