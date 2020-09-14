const { Router } = require("express");

module.exports = function ({ EgresoGastoController }) {
  const router = Router();
  router.get("/", EgresoGastoController.getAll.bind(EgresoGastoController));
  router.get("/:id", EgresoGastoController.get.bind(EgresoGastoController));
  router.post("/", EgresoGastoController.create.bind(EgresoGastoController));
  router.put("/:id", EgresoGastoController.update.bind(EgresoGastoController));
  router.delete("/", EgresoGastoController.delete.bind(EgresoGastoController));

  return router;
};
