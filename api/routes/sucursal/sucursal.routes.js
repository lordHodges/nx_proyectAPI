const { Router } = require("express");

module.exports = function ({ SucursalController }) {
  const router = Router();

  router.get("/", SucursalController.getSucursales.bind(SucursalController));
  router.get("/:id", SucursalController.getSucursal.bind(SucursalController));
  router.post("/", SucursalController.createSucursal.bind(SucursalController));
  router.put(
    "/:id",
    SucursalController.updateSucursal.bind(SucursalController)
  );
  router.delete(
    "/:id",
    SucursalController.deleteSucursal.bind(SucursalController)
  );

  return router;
};
