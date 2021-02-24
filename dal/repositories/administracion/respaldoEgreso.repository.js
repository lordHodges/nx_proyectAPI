const BaseRepository = require("../base.repository");

class RespaldoEgresoRepository extends BaseRepository {
    constructor({ db }) {
        super(db, 'RespaldoEgreso');

    }



}
module.exports = RespaldoEgresoRepository;