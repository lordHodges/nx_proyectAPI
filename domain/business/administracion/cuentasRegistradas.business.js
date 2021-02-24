const BaseBusiness = require('../base.business');
class CuentasRegistradasBusiness extends BaseBusiness {
    constructor({ CuentasRegistradasRepository }) {
        super(CuentasRegistradasRepository);
        this._cuentasRepository = CuentasRegistradasRepository;
    }

    async registrarCuenta(idBanco, alias, numeroCuenta, tipoCuenta, saldo) {
        const dto = { idBanco, alias, numeroCuenta, tipoCuenta, saldo };
        const cuenta = await this._cuentasRepository.create(dto);
        return cuenta;
    }
    async getCuentasRegistradas() {
        const cuentas = await this._cuentasRepository.getAll();
        return cuentas;
    }
    async getCuentaRegistrada(idcuenta) {
        const cuenta = this._cuentasRepository.get(idcuenta);
        return cuenta;
    }
    async asignarCuentaEmpresa(idCuenta, idEmpresa) {
        // crear table CuentaEmpresa
    }

    async actualizarSaldo(idCuenta, valor) {

        const cuenta = await this._cuentasRepository.get(idCuenta);
        cuenta.saldo = cuenta.saldo + valor;

        try {

            await this._cuentasRepository.update(cuenta.id, cuenta.dataValues);

            return await this._cuentasRepository.get(cuenta.id);

        } catch (error) {

            return "notUpdated";
        }
    }
}
module.exports = CuentasRegistradasBusiness;
