const { Router } = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const compression = require("compression");

module.exports = function ({ RolRoutes, UsuarioRoutes, AuthRoutes }) {
  const router = Router();
  const apiRoute = Router();

  apiRoute.use(bodyParser.json()).use(compression()).use(cors());

  apiRoute.use("/usuarios", UsuarioRoutes);
  apiRoute.use("/rol", RolRoutes);
  apiRoute.use("/auth", AuthRoutes);
  router.use("/api", apiRoute);

  return router;
};
