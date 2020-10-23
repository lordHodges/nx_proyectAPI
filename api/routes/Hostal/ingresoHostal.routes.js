const { Router } = require("express");

const multer = require("multer");
var express = require("express");
var app = express();
const path = require("path");
const cors = require("cors");

var DIR = "./uploads/ingresoHostal";
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
/* app.use(
  cors({
    origin: ["http://localhost:4200", "http://127.0.0.1:4200"],
    credentials: true,
  })
); */

module.exports = function ({ IngresoHostalController }) {
  const router = Router();

  router.get(
    "/",
    IngresoHostalController.getIngresos.bind(IngresoHostalController)
  );

  router.get(
    "/:id",
    IngresoHostalController.getIngreso.bind(IngresoHostalController)
  );

  router.post(
    "/conRespaldo",
    IngresoHostalController.createIngresoWithRespaldo.bind(
      IngresoHostalController
    )
  );
  router.post(
    "/upload",
    upload.single("photo"),
    IngresoHostalController.upload.bind(IngresoHostalController)
  );

  app.use("/api/egresoHostal/download", express.static(DIR));
  router.get("/download/*", function (req, res) {
    filename = req.params[0];
    filepath =
      path.join(__dirname, "../../../uploads") + "/ingresoHostal/" + filename;

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
