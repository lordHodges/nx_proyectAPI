const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const https = require("https");
const bodyParser = require("body-parser");

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
      const serv = https
        .createServer(
          {
            key: fs.readFileSync("server.key"),
            cert: fs.readFileSync("server.cert"),
          },
          this._express
        )
        .listen(this._config.PORT, function () {
          const { port } = serv.address();

          console.log(
            `Example app listening on port ${port}, .. Go to https://localHost:${port} `
          );
          resolve();
        });
    });
  }
}

module.exports = Server;
