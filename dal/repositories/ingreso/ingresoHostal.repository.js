const BaseRepository = require("../base.repository");

class IngresoHostalRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "IngresoHostal");
  }
}
module.exports = IngresoHostalRepository;
