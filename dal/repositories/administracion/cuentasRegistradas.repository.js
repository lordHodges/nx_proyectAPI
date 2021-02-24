const BaseRepository = require("../base.repository");

class CuentasRegistradasRepository extends BaseRepository {
    constructor({ db }) {
        super(db, 'CuentasRegistradas');

    }



}
module.exports = CuentasRegistradasRepository;