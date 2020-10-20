const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
const DIR = "./uploads";
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

let upload = multer({ storage: storage });

class FileService {
  constructor() {
    this._upload = upload;
  }

  async uploadFile(file) {
    return "file...eurek!";
  }
}
module.exports = FileService;
