const { Router } = require("express");

module.exports = function ({ EmpresaController }) {
  const router = Router();

  router.get("/", EmpresaController.getEmpresas.bind(EmpresaController));
  router.get("/:id", EmpresaController.getEmpresa.bind(EmpresaController));
  router.post("/", EmpresaController.createEmpresa.bind(EmpresaController));
  router.put("/:id", EmpresaController.updateEmpresa.bind(EmpresaController));
  router.delete(
    "/:id",
    EmpresaController.deleteEmpresa.bind(EmpresaController)
  );

  return router;
};
