const { Router } = require("express");

const multer = require("multer");
var express = require("express");
var app = express();
const path = require("path");

var DIR = "../uploads/ingresoLubricentro";
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

module.exports = function ({ IngresoLubricentroController }) {
	const router = Router();

	router.get(
		"/",
		IngresoLubricentroController.getIngresos.bind(IngresoLubricentroController)
	);

	router.get(
		"/:id",
		IngresoLubricentroController.getIngreso.bind(IngresoLubricentroController)
	);

	router.post(
		"/conRespaldo",
		IngresoLubricentroController.createIngresoWithRespaldo.bind(
			IngresoLubricentroController
		)
	);

	router.post(
		"/upload",
		upload.single("photo"),
		IngresoLubricentroController.upload.bind(IngresoLubricentroController)
	);

	app.use("/api/egresoLubricentro/download", express.static(DIR));
	router.get("/download/*", function (req, res) {
		filename = req.params[0];
		filepath =
			path.join(__dirname, "../../../../uploads") +
			"/ingresoLubricentro/" +
			filename;

		return res.sendFile(filepath);
	});

	return router;
};
