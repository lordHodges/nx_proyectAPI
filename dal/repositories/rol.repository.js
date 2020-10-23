const BaseRepository = require("./base.repository");

class RolRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Rol");
  }
}

module.exports = RolRepository;
