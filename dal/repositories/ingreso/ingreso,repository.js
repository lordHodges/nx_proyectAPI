const BaseRepository = require("../base.repository");

class IngresoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Ingreso");
  }
}
module.exports = IngresoRepository;
