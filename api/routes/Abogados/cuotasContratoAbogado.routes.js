const { Router } = require("express");
const multer = require("multer");
var express = require("express");
var app = express();
const path = require("path");

var DIR = "../uploads/ingresoFirma";
express.static(DIR);
let storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, DIR);
	},
	filename: (req, file, cb) => {
		cb(
			null,
			file.fieldname + "-" + Date.now() + path.extname(file.originalname)
		);
	},
});
const upload = multer({ storage: storage });

module.exports = function ({ CuotasContratoAbogadoController }) {
	const router = Router();
	app.use("/api/ingresoFirma/download", express.static(DIR));
	router.get("/download/*", function (req, res) {
		let filename = req.params[0];
		let filepath =
			path.join(__dirname, "../../../../uploads") + "/ingresoFirma/" + filename;

		return res.sendFile(filepath);
	});
	router.post(
		"/upload",
		upload.single("photo"),
		CuotasContratoAbogadoController.upload.bind(CuotasContratoAbogadoController)
	);

	router.post(
		"/",
		CuotasContratoAbogadoController.crearCuotas.bind(
			CuotasContratoAbogadoController
		)
	);
	router.post(
		"/registrarPago",
		CuotasContratoAbogadoController.registrarPago.bind(
			CuotasContratoAbogadoController
		)
	);
	router.post(
		"/calcularCuotas",
		CuotasContratoAbogadoController.calcularCuotas.bind(
			CuotasContratoAbogadoController
		)
	);

	router.post(
		"/repactarContrato",
		CuotasContratoAbogadoController.repactarContrato.bind(
			CuotasContratoAbogadoController
		)
	);

	router.get(
		"/obtenerCuotas",
		CuotasContratoAbogadoController.obtenerCuotas.bind(
			CuotasContratoAbogadoController
		)
	);
	router.post(
		"/agregarRespaldos",
		CuotasContratoAbogadoController.agregarRespaldos.bind(
			CuotasContratoAbogadoController
		)
	);
	router.get(
		"/obtenerRespaldos/:idCuota",
		CuotasContratoAbogadoController.obtenerRespaldos.bind(
			CuotasContratoAbogadoController
		)
	);

	return router;
};
