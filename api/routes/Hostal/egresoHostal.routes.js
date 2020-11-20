const { Router } = require("express");

const multer = require("multer");
var express = require("express");
var app = express();
const path = require("path");

var DIR = "../uploads/egresoHostal";
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

module.exports = function ({ EgresoHostalController }) {
	const router = Router();

	router.get(
		"/",
		EgresoHostalController.getEgresos.bind(EgresoHostalController)
	);

	router.get(
		"/:id",
		EgresoHostalController.getEgreso.bind(EgresoHostalController)
	);

	router.post(
		"/conRespaldo",
		EgresoHostalController.createEgresoWithRespaldo.bind(EgresoHostalController)
	);
	router.post(
		"/upload",
		upload.single("photo"),
		EgresoHostalController.upload.bind(EgresoHostalController)
	);

	app.use("/api/egresoHostal/download", express.static(DIR));
	router.get("/download/*", function (req, res) {
		var filename = req.params[0];
		var filepath =
			path.join(__dirname, "../../../../uploads") + "/egresoHostal/" + filename;

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
