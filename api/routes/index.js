const { Router } = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const compression = require("compression");

module.exports = function ({
  RolRoutes,
  UsuarioRoutes,
  AuthRoutes,
  EgresoBancarioRoutes,
  EgresoCostoRoutes,
  EgresoGastoRoutes,
  EgresoImpuestoRoutes,
  EgresoRemuneracionRoutes,
  EmpresaRoutes,
  SucursalRoutes,
  IngresoHostalRoutes,
}) {
  const router = Router();
  const apiRoute = Router();

  apiRoute.use(bodyParser.json()).use(compression()).use(cors());
  apiRoute.use("/empresa", EmpresaRoutes);
  apiRoute.use("/sucursal", SucursalRoutes);
  apiRoute.use("/usuarios", UsuarioRoutes);
  apiRoute.use("/rol", RolRoutes);
  apiRoute.use("/auth", AuthRoutes);
  apiRoute.use("/ingresoHostal", IngresoHostalRoutes);
  apiRoute.use("/egresoRemuneracion", EgresoRemuneracionRoutes);
  apiRoute.use("/egresoImpuesto", EgresoImpuestoRoutes);
  apiRoute.use("/egresoGasto", EgresoGastoRoutes);
  apiRoute.use("/egresoCosto", EgresoCostoRoutes);
  apiRoute.use("/egresoBancario", EgresoBancarioRoutes);
  router.use("/api", apiRoute);

  return router;
};
