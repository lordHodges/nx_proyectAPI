class MovimientosCuentasService {
    constructor({ MovimientosCuentasBusiness, }) {
        this._movimientosBusiness = MovimientosCuentasBusiness;
    }
    async registrarRetiros(idcuenta, monto, fecha, file) {

        const resp = await this._movimientosBusiness.registrarRetiros(
            idcuenta,
            monto,
            fecha,
            file
        );
        return resp;
    }
    async registrarAbonos(idcuenta, monto, fecha, file) {
        const resp = await this._movimientosBusiness.registrarAbonos(
            idcuenta,
            monto,
            fecha,
            file
        );
        return resp;
    }
    async obtenerMovimientos() {
        const movimientos = await this._movimientosBusiness.obtenerMovimientos();
        return movimientos;
    }
}
module.exports = MovimientosCuentasService;
