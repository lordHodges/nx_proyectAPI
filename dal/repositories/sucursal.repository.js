const BaseRepository = require("./base.repository");

class SucursalRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Sucursal");
  }
}

module.exports = SucursalRepository;
