const { Router } = require("express");
const { HOOD, HAAD } = require("../../config/environments");
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
  IngresoHostalRoutes,
}) {
  const router = Router();
  const apiRoute = Router();
  const whitelist = ["http://localhost:4000", "http://abc.com"];
  apiRoute.use(bodyParser.json()).use(compression()).use(cors(whitelist));

  apiRoute.use("/empresa", EmpresaRoutes);
  apiRoute.use("/sucursal", SucursalRoutes);
  apiRoute.use("/usuarios", UsuarioRoutes);
  apiRoute.use("/rol", RolRoutes);
  apiRoute.use("/auth", AuthRoutes);
  apiRoute.use("/egresoHostal", EgresoHostalRoutes);
  apiRoute.use("/ingresoHostal", IngresoHostalRoutes);

  router.use("/api", apiRoute);

  return router;
};
