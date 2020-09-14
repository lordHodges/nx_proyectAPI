const BaseRepository = require("./base.repository");

class EmpresaRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Empresa");
  }
}

module.exports = EmpresaRepository;
