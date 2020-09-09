const BaseService = require("./base.service");

class UsuarioService extends BaseService {
  constructor({ UsuarioBusiness }) {
    super(UsuarioBusiness);
    this._usuarioBusiness = UsuarioBusiness;
  }
  async getByName(nombreUsuario) {
    const usuario = await this._usuarioBusiness.getByName(nombreUsuario);
    return usuario;
  }
  async encriptarPassword(pass) {
    const encryptedPass = await this._usuarioBusiness.encriptarPassword(pass);
    return encryptedPass;
  }
  async compararPassword(pass, ver) {
    const comparedPass = await this._usuarioBusiness.compararPassword(
      pass,
      ver
    );
    return comparedPass;
  }
}
module.exports = UsuarioService;
