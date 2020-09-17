const { Router } = require("express");

module.exports = function ({ IngresoController }) {
  const router = Router();
  router.get("/", IngresoController.getAll.bind(IngresoController));
  router.get("/:id", IngresoController.get.bind(IngresoController));
  router.post("/", IngresoController.create.bind(IngresoController));
  router.put("/:id", IngresoController.update.bind(IngresoController));
  router.delete("/", IngresoController.delete.bind(IngresoController));

  return router;
};
