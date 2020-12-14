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
	EgresoLubricentroRoutes,
	IngresoLubricentroRoutes,
	ClienteRoutes,
	CausaRoutes,
	ContratoClienteAbogadoRoutes,
	CuotasContratoAbogadoRoutes,
	AbogadoRoutes,
	EgresoFirmaRoutes,
	IngresoRentacarRoutes,
	EgresoRentacarRoutes,
	BancoRoutes,
	ProyectoAgrofirmaRoutes,
	IngresoAgrofirmaRoutes,
	EgresoAgrofirmaRoutes,
	IngresoInmobiliariaRoutes,
	EgresoInmobiliariaRoutes,
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
	apiRoute.use("/egresoLubricentro", EgresoLubricentroRoutes);
	apiRoute.use("/ingresoLubricentro", IngresoLubricentroRoutes);
	apiRoute.use("/cliente", ClienteRoutes);
	apiRoute.use("/causa", CausaRoutes);
	apiRoute.use("/contratoCienteAbogado", ContratoClienteAbogadoRoutes);
	apiRoute.use("/cuotasContrato", CuotasContratoAbogadoRoutes);
	apiRoute.use("/abogado", AbogadoRoutes);
	apiRoute.use("/ingresoRentacar", IngresoRentacarRoutes);
	apiRoute.use("/egresoRentacar", EgresoRentacarRoutes);
	apiRoute.use("/banco", BancoRoutes);
	apiRoute.use("/egresoFirma", EgresoFirmaRoutes);
	apiRoute.use("/proyectoAgrofirma", ProyectoAgrofirmaRoutes);
	apiRoute.use("/ingresoAgrofirma", IngresoAgrofirmaRoutes);
	apiRoute.use("/egresoAgrofirma", EgresoAgrofirmaRoutes);
	apiRoute.use("/ingresoInmobiliaria", IngresoInmobiliariaRoutes);
	apiRoute.use("/egresoInmobiliaria", EgresoInmobiliariaRoutes);

	//!prefj
	router.use("/api", apiRoute);

	return router;
};
