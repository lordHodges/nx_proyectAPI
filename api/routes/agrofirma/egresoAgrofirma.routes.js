const { Router } = require("express");
const multer = require("multer");
var express = require("express");
var app = express();
const path = require("path");

var DIR = "../uploads/egresoAgrofirma";
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
module.exports = function ({ EgresoAgrofirmaController }) {
	const router = Router();

	app.use("/api/egresoAgrofirma/download", express.static(DIR));
	router.get("/download/*", function (req, res) {
		let filename = req.params[0];
		let filepath =
			path.join(__dirname, "../../../../uploads") +
			"/egresoAgrofirma/" +
			filename;

		return res.sendFile(filepath);
	});

	router.post(
		"/registrarEgreso",
		EgresoAgrofirmaController.registrarEgreso.bind(EgresoAgrofirmaController)
	);
	router.post(
		"/upload",
		upload.single("photo"),
		EgresoAgrofirmaController.upload.bind(EgresoAgrofirmaController)
	);

	router.get(
		"/obtenerEgresos/:idProyecto",
		EgresoAgrofirmaController.obtenerEgresos.bind(EgresoAgrofirmaController)
	);

	router.get(
		"/obtenerEgreso/:id",
		EgresoAgrofirmaController.obtenerEgreso.bind(EgresoAgrofirmaController)
	);

	return router;
};
