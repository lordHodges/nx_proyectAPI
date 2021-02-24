const BaseRepository = require('../base.repository');

class MovimientosCuentasRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "MovimientosCuentas");
    }

}
module.exports = MovimientosCuentasRepository;