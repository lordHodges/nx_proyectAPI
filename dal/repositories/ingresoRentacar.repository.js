const BaseRepository = require("./base.repository");

class IngresoRentacarRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "IngresoRentacar");
  }
}
module.exports = IngresoRentacarRepository;
