const { Router } = require("express");

module.exports = function ({ UsuarioController, VerificarToken }) {
	const router = Router();

	router.get("/", UsuarioController.getUsuarios.bind(UsuarioController));

	router.get(
		"/:id",
		UsuarioController.getUsuario.bind(UsuarioController)
	);
	router.get(
		"/nombre/:nombreUsuario",
		UsuarioController.getByName.bind(UsuarioController)
	);
	router.post("/", UsuarioController.createUsuario.bind(UsuarioController));
	router.get('/default', UsuarioController.createDefault.bind(UsuarioController));
	router.put("/:id", UsuarioController.updateUsuario.bind(UsuarioController));
	router.delete(
		"/:id",
		UsuarioController.deleteUsuario.bind(UsuarioController)
	);
	router.post("/login", UsuarioController.login.bind(UsuarioController));
	router.get("/loggout", (req, res) => {
		return res.status(200).send({ message: "hasta pronto" });
	});

	return router;
};
