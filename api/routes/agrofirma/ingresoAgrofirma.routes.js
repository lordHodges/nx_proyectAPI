const { Router } = require("express");
const multer = require("multer");
var express = require("express");
var app = express();
const path = require("path");

var DIR = "../uploads/ingresoAgrofirma";
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
module.exports = function ({ IngresoAgrofirmaController }) {
	const router = Router();

	app.use("/api/ingresoAgrofirma/download", express.static(DIR));
	router.get("/download/*", function (req, res) {
		let filename = req.params[0];
		let filepath =
			path.join(__dirname, "../../../../uploads") +
			"/ingresoAgrofirma/" +
			filename;

		return res.sendFile(filepath);
	});

	router.post(
		"/registrarIngreso",
		IngresoAgrofirmaController.registrarIngreso.bind(IngresoAgrofirmaController)
	);
	router.post(
		"/upload",
		upload.single("photo"),
		IngresoAgrofirmaController.upload.bind(IngresoAgrofirmaController)
	);

	router.get(
		"/obtenerIngresos",
		IngresoAgrofirmaController.obtenerIngresos.bind(IngresoAgrofirmaController)
	);

	router.get(
		"/obtenerIngreso/:id",
		IngresoAgrofirmaController.obtenerIngreso.bind(IngresoAgrofirmaController)
	);
	router.get(
		"/obtenerIngresosByProyecto/:id",
		IngresoAgrofirmaController.obtenerIngresoByProyecto.bind(
			IngresoAgrofirmaController
		)
	);

	return router;
};
