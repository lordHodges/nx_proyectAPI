require("dotenv").config();

const DEVELOPMENT = require("./development");
const QA = require("./qa");

const { NODE_ENV } = process.env;

//consultar entorno seteado
let currentEnv = DEVELOPMENT;

if (NODE_ENV === "production") {
  currentEnv = PRODUCTION;
} else if (NODE_ENV === "qa") {
  currentEnv = QA;
}

module.exports = currentEnv;
//TODO agregar al indice los demas entyornos de configuracion.
