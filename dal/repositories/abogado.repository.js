const BaseRepository = require("./base.repository");

class AbogadoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Abogado");
  }
}

module.exports = AbogadoRepository;
