const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/environments");
class VerificarToken {
  constructor({}) {}
  async verifying(req, res, next) {
    const token = req.headers["authorization"];
    if (!token) {
      return res
        .status(401)
        .send({ auth: false, message: "No posee token de seguridad" });
    }
    try {
      const decoded = await jwt.verify(token, SECRET);
      req.body.id = decoded.id;
      next();
    } catch (error) {
      return res
        .status(401)
        .send({ auth: false, message: "No token no corresponde" });
    }
  }
}
module.exports = VerificarToken;
