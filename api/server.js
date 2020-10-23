const express = require("express");
const morgan = require("morgan");
var fs = require("fs");
var https = require("https");
const bodyParser = require("body-parser");
const { version } = require("punycode");
const key = fs.readFileSync("./server.key");
const cert = fs.readFileSync("./server.cert");

class Server {
  constructor({ config, router }) {
    this._config = config;
    this._express = express();
    this._express.use(router);
    this._express.use(morgan("dev"));
    /* this._express.set(
      https.createServer({ key: key, cert: cert }, this._express)
    ); */
  }

  start() {
    return new Promise((resolve, reject) => {
      /* const http = this._express.listen(this._config.PORT, () => {
        const { port } = http.address();
        console.log("Aplicacion corriendo en puerto:  " + port);
        resolve();
      });
      
 */
      https
        .createServer(
          {
            key: fs.readFileSync("server.key"),
            cert: fs.readFileSync("server.cert"),
          },
          this._express
        )
        .listen(this._config.PORT, function () {
          console.log(
            "Example app listening on port 3000! Go to https://localhost:3000"
          );
          resolve();
        });
    });
  }
}

module.exports = Server;
