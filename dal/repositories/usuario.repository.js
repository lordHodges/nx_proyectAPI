const BaseRepository = require("./base.repository");

class UsuarioRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Usuario");
    this._db = db;
    this._usuario = "Usuario";
  }
  getByName(nombreUsuario) {
    return this._db[this._usuario].findOne({ where: { nombreUsuario } });
  }
}

module.exports = UsuarioRepository;
