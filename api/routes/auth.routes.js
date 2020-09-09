const { Router } = require("express");

module.exports = function ({ UsuarioController }) {
  const router = Router();

  router.post("/", UsuarioController.login.bind(UsuarioController));

  /*  router.post("/", UsuarioController.createUsuario.bind(UsuarioController)); */
  return router;
};
