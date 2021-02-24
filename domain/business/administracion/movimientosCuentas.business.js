class MovimientosCuentasBusiness {
    constructor({ CuentasRegistradasBusiness, MovimientosCuentasRepository, RespaldoEgresoRepository, RespaldoIngresoRepository }) {
        this._cuentasBusiness = CuentasRegistradasBusiness;
        this._movimientosRepository = MovimientosCuentasRepository;
        this._respaldoEgresoRepository = RespaldoEgresoRepository;
        this._respaldoIngresoRepository = RespaldoIngresoRepository;
    }
    async registrarRetiros(idcuenta, monto, fecha, file) {
        const montodesc = monto * -1;
        const cuenta = await this._cuentasBusiness.getCuentaRegistrada(idcuenta);
        const resp = await this._cuentasBusiness.actualizarSaldo(idcuenta, montodesc);
        const estadoActual = await this._cuentasBusiness.getCuentaRegistrada(cuenta.id);

        if (resp[0] != 0) {
            const movimiento = {
                fecha: fecha,
                idcuenta: idcuenta,
                monto: monto,
                tipo: "RETIRO",
                saldoAnterior: cuenta.saldo,
                saldoActual: estadoActual.saldo,
            };
            const created = await this._movimientosRepository.create(movimiento);
            await this._respaldoEgresoRepository.create({ url: file, idMovimiento: created.id });
            return created;
        } else {
            return resp;
        }
    }
    async registrarAbonos(idcuenta, monto, fecha, file) {

        const cuenta = await this._cuentasBusiness.getCuentaRegistrada(idcuenta);

        const resp = await this._cuentasBusiness.actualizarSaldo(cuenta.id, monto);
        const estadoActual = await this._cuentasBusiness.getCuentaRegistrada(cuenta.id);

        if (resp[0] != 0) {
            const movimiento = {
                fecha: fecha,
                idcuenta: idcuenta,
                monto: monto,
                tipo: "ABONO",
                saldoAnterior: cuenta.saldo,
                saldoActual: estadoActual.saldo,
            };
            const created = await this._movimientosRepository.create(movimiento);
            await this._respaldoIngresoRepository.create({ url: file, idMovimiento: created.id });
            return created;
        } else {

            return resp;
        }
    }
    async obtenerMovimientos() {
        let respaldosEgresos = await this._respaldoEgresoRepository.getAll();
        respaldosEgresos = respaldosEgresos.map(data => data.dataValues);
        let respaldosIngresos = await this._respaldoIngresoRepository.getAll();
        respaldosIngresos = respaldosIngresos.map(data => data.dataValues);

        let movimientos = await this._movimientosRepository.getAll();
        movimientos.forEach(data => {
            switch (data.dataValues.tipo) {
                case 'RETIRO':
                    data.dataValues.respaldo = respaldosEgresos.filter(dato => dato.idMovimiento === data.dataValues.id);


                    break;
                case 'ABONO':
                    data.dataValues.respaldo = respaldosIngresos.filter(dato => dato.idMovimiento === data.dataValues.id);


                    break;

                default:
                    break;
            }

        });
        console.log(movimientos);

        return movimientos;
    }
}
module.exports = MovimientosCuentasBusiness;
