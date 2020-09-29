const { Router } = require("express");

module.exports = function ({ EmpresaController }) {
  const router = Router();

  router.get(
    "/",
    EmpresaController.getEmpresasConSucursales.bind(EmpresaController)
  );
  router.get("/:id", EmpresaController.getEmpresa.bind(EmpresaController));
  router.get(
    "/empresaSucursales/:id",
    EmpresaController.getEmpresaConSucursales.bind(EmpresaController)
  );
  router.post("/", EmpresaController.createEmpresa.bind(EmpresaController));
  router.put("/:id", EmpresaController.updateEmpresa.bind(EmpresaController));
  router.delete(
    "/:id",
    EmpresaController.deleteEmpresa.bind(EmpresaController)
  );

  return router;
};
