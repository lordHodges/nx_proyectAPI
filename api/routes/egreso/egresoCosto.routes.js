const { Router } = require("express");

module.exports = function ({ EgresoCostoController }) {
  const router = Router();
  router.get("/", EgresoCostoController.getAll.bind(EgresoCostoController));
  router.get("/:id", EgresoCostoController.get.bind(EgresoCostoController));
  router.post("/", EgresoCostoController.create.bind(EgresoCostoController));
  router.put("/:id", EgresoCostoController.update.bind(EgresoCostoController));
  router.delete("/", EgresoCostoController.delete.bind(EgresoCostoController));

  return router;
};
