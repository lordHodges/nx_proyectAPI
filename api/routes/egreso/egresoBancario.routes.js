const { Router } = require("express");

module.exports = function ({ EgresoBancarioController }) {
  const router = Router();
  router.get(
    "/",
    EgresoBancarioController.getAll.bind(EgresoBancarioController)
  );
  router.get(
    "/:id",
    EgresoBancarioController.get.bind(EgresoBancarioController)
  );
  router.post(
    "/",
    EgresoBancarioController.create.bind(EgresoBancarioController)
  );
  router.put(
    "/:id",
    EgresoBancarioController.update.bind(EgresoBancarioController)
  );
  router.delete(
    "/",
    EgresoBancarioController.delete.bind(EgresoBancarioController)
  );

  return router;
};
