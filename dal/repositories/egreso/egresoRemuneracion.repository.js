const BaseRepository = require("../base.repository");

class EgresoRemuneracionRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "EgresoRemuneracion");
  }
}
module.exports = EgresoRemuneracionRepository;
