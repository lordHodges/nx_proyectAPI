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
	ClienteRoutes,
	CausaRoutes,
	CuotasCausaRoutes,
}) {
	const router = Router();
	const apiRoute = Router();
	const whitelist = ["https://localhost:4200", "https://www.imlchile.cl"];
	apiRoute.use(bodyParser.json()).use(compression()).use(cors(whitelist));

	apiRoute.use("/empresa", EmpresaRoutes);
	apiRoute.use("/sucursal", SucursalRoutes);
	apiRoute.use("/usuarios", UsuarioRoutes);
	apiRoute.use("/rol", RolRoutes);
	apiRoute.use("/auth", AuthRoutes);
	apiRoute.use("/egresoHostal", EgresoHostalRoutes);
	apiRoute.use("/ingresoHostal", IngresoHostalRoutes);
	apiRoute.use("/cliente", ClienteRoutes);
	apiRoute.use("/causa", CausaRoutes);
	apiRoute.use("/cuotasCausa", CuotasCausaRoutes);

	router.use("/api", apiRoute);

	return router;
};
