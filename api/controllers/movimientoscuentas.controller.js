class MovimientosCuentasController {
    constructor({ MovimientosCuentasService }) {
        this._movimientosService = MovimientosCuentasService;
    }
    async registrarRetiros(req, res) {
        const { body } = req;
        const created = await this._movimientosService.registrarRetiros(body.idcuenta, body.monto, body.fecha, body.file);
        return res.status(200).send(created);
    }
    async registrarAbonos(req, res) {
        const { body } = req;
        const created = await this._movimientosService.registrarAbonos(body.idcuenta, body.monto, body.fecha, body.file);
        return res.status(200).send(created);
    }
    async obtenerMovimientos(req, res) {
        const movimientos = await this._movimientosService.obtenerMovimientos();
        return res.status(200).send(movimientos);
    }
    async upload(req, res) {
        if (!req.file) {
            console.log("No file received");
            return res.send({
                success: false,
            });
        } else {
            console.log("file received successfully");
            setTimeout(() => {
                return res.status(200).send(req.file.filename);
            }, 2000);
        }
    }
}
module.exports = MovimientosCuentasController