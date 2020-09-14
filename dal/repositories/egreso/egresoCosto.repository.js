const BaseRepository = require("../base.repository");

class EgresoCostoRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "EgresoCosto");
  }
}
module.exports = EgresoCostoRepository;
