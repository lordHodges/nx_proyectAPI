const { Router } = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const compression = require("compression");

module.exports = function ({
  RolRoutes,
  UsuarioRoutes,
  AuthRoutes,
  EmpresaRoutes,
  SucursalRoutes,
  EgresoHostalRoutes,
}) {
  const router = Router();
  const apiRoute = Router();

  apiRoute.use(bodyParser.json()).use(compression()).use(cors());
  apiRoute.use("/empresa", EmpresaRoutes);
  apiRoute.use("/sucursal", SucursalRoutes);
  apiRoute.use("/usuarios", UsuarioRoutes);
  apiRoute.use("/rol", RolRoutes);
  apiRoute.use("/auth", AuthRoutes);
  apiRoute.use("/egresoHostal", EgresoHostalRoutes);

  router.use("/api", apiRoute);

  return router;
};
