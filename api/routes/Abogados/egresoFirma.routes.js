const { Router } = require("express");

const multer = require("multer");
var express = require("express");
var app = express();
const path = require("path");

var DIR = "../uploads/egresoFirma";
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
module.exports = function ({ EgresoFirmaController }) {
	const router = Router();
	router.post(
		"/conRespaldo",
		EgresoFirmaController.createEgresoWithRespaldo.bind(EgresoFirmaController)
	);
	router.post(
		"/upload",
		upload.single("photo"),
		EgresoFirmaController.upload.bind(EgresoFirmaController)
	);
	app.use("/api/egresoFirma/download", express.static(DIR));
	router.get("/download/*", function (req, res) {
		var filename = req.params[0];
		var filepath =
			path.join(__dirname, "../../../../uploads") + "/egresoFirma/" + filename;

		return res.sendFile(filepath);
	});

	router.get(
		"/:id",
		EgresoFirmaController.getEgreso.bind(EgresoFirmaController)
	);
	router.get("/", EgresoFirmaController.getEgresos.bind(EgresoFirmaController));

	//
	return router;
};
