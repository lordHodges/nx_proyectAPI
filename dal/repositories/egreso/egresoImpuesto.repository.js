const BaseRepository = require("../base.repository");

class EgresoImpuestoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "EgresoImpuesto");
  }
}
module.exports = EgresoImpuestoRepository;
