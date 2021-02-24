const { Router } = require("express");

const multer = require('multer');

var express = require("express");
var app = express();
const path = require("path");

var DIR = "../uploads/movimientosCuentas";
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


module.exports = function ({ MovimientosCuentasController }) {
    const router = Router();

    router.post(
        "/registrarAbonos",
        MovimientosCuentasController.registrarAbonos.bind(MovimientosCuentasController)
    );
    router.post(
        "/registrarRetiros",
        MovimientosCuentasController.registrarRetiros.bind(MovimientosCuentasController)
    );
    router.get(
        '/obtenerMovimientos',
        MovimientosCuentasController.obtenerMovimientos.bind(MovimientosCuentasController)
    )
    router.post(
        "/upload",
        upload.single("photo"),
        MovimientosCuentasController.upload.bind(MovimientosCuentasController)
    );
    app.use("/api/egresoHostal/download", express.static(DIR));
    router.get("/download/*", function (req, res) {
        var filename = req.params[0];
        var filepath =
            path.join(__dirname, "../../../../uploads") + "/movimientosCuentas/" + filename;

        return res.sendFile(filepath);
    });





    return router;
};
