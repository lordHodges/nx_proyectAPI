
class GetIngresosEgresosController{
    constructor({GetIngresosEgresosService}){
        this._ingresosEgresosService = GetIngresosEgresosService;
    }


    async obtenerIngresosEmpresas(req, res) {
		const ingresos = await this._ingresosEgresosService.getIngresos();
		return res.status(200).send(ingresos);
	}
    async obtenerEgresosEmpresas(req, res){
        const egresos = await this._ingresosEgresosService.getEgresos();
        return res.status(200).send(egresos);
    }
    async obtenerIngresosMensuales(req,res){
        const {year} = req.params;
        const ingresos = await this._ingresosEgresosService.getByYear(year);
        return res.status(200).send(ingresos);
    }

}
module.exports=GetIngresosEgresosController;


