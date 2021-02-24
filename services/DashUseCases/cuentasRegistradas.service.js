const BaseService = require('../base.service');
class CuentasRegistradasServices extends BaseService {
    constructor({ CuentasRegistradasBusiness }) {
        super(CuentasRegistradasBusiness);
        this._cuentasBusiness = CuentasRegistradasBusiness;
    }

    async registrarCuenta(idBanco, alias, numeroCuenta, tipoCuenta, saldo) {
        const cuenta = await this._cuentasBusiness.registrarCuenta(idBanco, alias, numeroCuenta, tipoCuenta, saldo);
        return cuenta;
    }
    async getCuentasRegistradas() {
        const cuentas = await this._cuentasBusiness.getCuentasRegistradas();
        return cuentas;
    }
    async actualizarSaldo(idCuenta, valor) {
        const cuenta = await this._cuentasBusiness.actualizarSaldo(idCuenta, valor);
        return cuenta;
    }
    async updateCuenta(idcuenta, cuenta) {

        const edited = await this._cuentasBusiness.update(idcuenta, cuenta);

        return edited;
    }

}
module.exports = CuentasRegistradasServices;