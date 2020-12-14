const { Router } = require("express");

const multer = require("multer");
var express = require("express");
var app = express();
const path = require("path");

var DIR = "../uploads/ingresoInmobiliaria";
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

module.exports = function ({ IngresoInmobiliariaController }) {
	const router = Router();

	router.get(
		"/",
		IngresoInmobiliariaController.getIngresos.bind(IngresoInmobiliariaController)
	);

	router.get(
		"/:id",
		IngresoInmobiliariaController.getIngreso.bind(IngresoInmobiliariaController)
	);

	router.post(
		"/conRespaldo",
		IngresoInmobiliariaController.createIngresoWithRespaldo.bind(
			IngresoInmobiliariaController
		)
	);

	router.post(
		"/upload",
		upload.single("photo"),
		IngresoInmobiliariaController.upload.bind(IngresoInmobiliariaController)
	);

	app.use("/api/egresoInmobiliaria/download", express.static(DIR));
	router.get("/download/*", function (req, res) {
		filename = req.params[0];
		filepath =
			path.join(__dirname, "../../../../uploads") +
			"/ingresoInmobiliaria/" +
			filename;

		return res.sendFile(filepath);
	});

	return router;
};
