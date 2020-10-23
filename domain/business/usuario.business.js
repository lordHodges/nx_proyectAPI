const mapper = require("automapper-js");
const bcrypt = require("bcryptjs");
const BaseBusiness = require("./base.business");
const { Usuario } = require("../models");

class UsuarioBusiness extends BaseBusiness {
  constructor({ UsuarioRepository }) {
    super(UsuarioRepository, Usuario);
    this._usuarioRepository = UsuarioRepository;
    this._usuario = Usuario;
  }
  async getByName(nombreUsuario) {
    const usuario = await this._usuarioRepository.getByName(nombreUsuario);
    if (!usuario) return null;
    return mapper(this._usuario, usuario.toJSON());
  }
  async encriptarPassword(pass) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(pass, salt);
  }
  async compararPassword(pass, ver) {
    const verificado = bcrypt.compare(pass, ver);
    return verificado;
  }
}

module.exports = UsuarioBusiness;
