const BaseRepository = require("../base.repository");

class EgresoBancarioRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "EgresoBancario");
  }
}
module.exports = EgresoBancarioRepository;
