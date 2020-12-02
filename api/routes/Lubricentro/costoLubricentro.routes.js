const { Router } = require("express");

const multer = require("multer");
var express = require("express");
var app = express();
const path = require("path");
const CostoLubricentro = require("../../../domain/models/costoLubricentro");

var DIR = "../uploads/costoLubricentro";
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

module.exports = function ({ CostoLubricentroController }){
    const router = Router();

    router.get(
        "/",
        CostoLubricentroController.getCostos.bind(CostoLubricentroController)
    );

    router.get(
        "/:id",
        CostoLubricentroController.getCosto.bind(CostoLubricentroController)
    );

    router.post(
        "/conRespaldo",
        CostoLubricentroController.createCostoWithRespaldo.bind(
            CostoLubricentroController
        )
    );

    router.post(
        "/upload",
        upload.single("photo"),
        CostoLubricentroController.upload.bind(CostoLubricentroController)
    );

    app.use("/api/costoLubricentro/download", express.static(DIR));
    router.get("/download/*", function (req, res){
        let filename = req.params[0];
        let filepath =
        path.join(__dirname, "../../../../uploads") +
        "/costoLubricentro/" +
        filename;

    return res.sendFile(filepath);
    });

    return router;
};