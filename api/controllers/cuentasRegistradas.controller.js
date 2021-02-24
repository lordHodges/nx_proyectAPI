class CuentasRegistradasController {
    constructor({ CuentasRegistradasService }) {
        this._cuentasService = CuentasRegistradasService;
    }
    async registrarCuentas(req, res) {
        const { body } = req;
        const created = await this._cuentasService
            .registrarCuenta(body.idBanco, body.alias, body.numeroCuenta, body.tipoCuenta, body.saldo);

        return res.status(200).send(created);

    }
    async obtenerCuentas(req, res) {
        const cuentas = await this._cuentasService.getCuentasRegistradas();
        return res.status(200).send(cuentas);
    }
    async updateCuenta(req, res) {
        const { idCuenta } = req.params;
        const { body } = req;
        const updated = await this._cuentasService.updateCuenta(idCuenta, body);
        return res.status(200).send(updated);
    }
}
module.exports = CuentasRegistradasController;