const BaseRepository = require("../base.repository");

class EgresoGastoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "EgresoGasto");
  }
}
module.exports = EgresoGastoRepository;
