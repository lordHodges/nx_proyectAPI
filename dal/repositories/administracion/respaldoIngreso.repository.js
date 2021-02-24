const BaseRepository = require("../base.repository");

class RespaldoIngresoRepository extends BaseRepository {
    constructor({ db }) {
        super(db, 'RespaldoIngreso');

    }



}
module.exports = RespaldoIngresoRepository;