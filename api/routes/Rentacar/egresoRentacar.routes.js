const { Router } = require("express");
const multer = require("multer");
var express = require("express");
var app = express();
const path = require("path");

var DIR = "../uploads/egresoRentacar";
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
module.exports = function ({ EgresoRentacarController }) {
	const router = Router();

	router.get(
		"/getEgresos",
		EgresoRentacarController.getEgresos.bind(EgresoRentacarController)
	);
	router.get(
		"/getDetalle/:id",
		EgresoRentacarController.getDetalleEgreso.bind(EgresoRentacarController)
	);

	router.get(
		"/getEgreso/:id",
		EgresoRentacarController.getEgreso.bind(EgresoRentacarController)
	);

	router.post(
		"/conRespaldo",
		EgresoRentacarController.createEgresoWithRespaldo.bind(
			EgresoRentacarController
		)
	);
	router.post(
		"/upload",
		upload.single("photo"),
		EgresoRentacarController.upload.bind(EgresoRentacarController)
	);

	app.use("/api/egresoRentacar/download", express.static(DIR));
	router.get("/download/*", function (req, res) {
		var filename = req.params[0];
		var filepath =
			path.join(__dirname, "../../../../uploads") +
			"/egresoRentacar/" +
			filename;

		return res.sendFile(filepath);
	});
	/*  router.put(
    "/:id",
    EgresoHostalController.updateEgreso.bind(EgresoHostalController)
  );
  router.delete(
    "/:id",
    EgresoHostalController.deleteEgreso.bind(EgresoHostalController)
  ); */

	return router;
};
