const ingresoHostalRoutes = require("../../../api/routes/Hostal/ingresoHostal.routes");

class GetIngresosMensualesBusiness {
    constructor({
        IngresoHostalRepository,
        IngresoInmobiliariaRepository,
        IngresoLubricentroRepository,
        RentacarIngresosRequestBusiness,
        IngresoAgrofirmaRepository,
    }) {
        this._hostalRepository = IngresoHostalRepository;
        this._inmobiliariaRepository = IngresoInmobiliariaRepository;
        this._lubricentroRepository = IngresoLubricentroRepository;
        this._rentacarRepository = RentacarIngresosRequestBusiness;
        this._agrofirmaRepository = IngresoAgrofirmaRepository;
    }
    async getByYear(year) {
        let ingresosHostal = await this._hostalRepository.getAllWithJoins();
        let ingresosInmobiliaria = await this._inmobiliariaRepository.getAllWithJoins();
        let ingresosLubricentro = await this._lubricentroRepository.getAllWithJoins();
        let ingresosRentacar = await this._rentacarRepository.getArriendos();
        let ingresosAgrofirma = await this._agrofirmaRepository.obtenerIngresos();


        ingresosHostal = this.extraerIngfo(ingresosHostal);
        ingresosInmobiliaria = this.extraerIngfo(ingresosInmobiliaria);
        ingresosLubricentro = this.extraerIngfo(ingresosLubricentro);
        ingresosRentacar = this.extraerInfoRent(ingresosRentacar.data);
        ingresosAgrofirma = this.extraerIngfo(ingresosAgrofirma);

        ingresosHostal = this.totalesPorMes(ingresosHostal, year);
        ingresosInmobiliaria = this.totalesPorMes(ingresosInmobiliaria, year);
        ingresosLubricentro = this.totalesPorMes(ingresosLubricentro, year);
        ingresosRentacar = this.totalesPorMes(ingresosRentacar, year);
        ingresosAgrofirma = this.totalesPorMes(ingresosAgrofirma, year);

        return [{ ingresosHostal: ingresosHostal }, { ingresosInmobiliaria: ingresosInmobiliaria }, { ingresosLubricentro: ingresosLubricentro },
        { ingresosAgrofirma: ingresosAgrofirma }, { ingresosRentacar: ingresosRentacar }];
        /*  */
    }
    totalesPorMes(listIngresos, year) {
        year = year + '';
        let enero = 0;
        let febrero = 0;
        let marzo = 0;
        let abril = 0;
        let mayo = 0;
        let junio = 0;
        let julio = 0;
        let agosto = 0;
        let septiembre = 0;
        let octubre = 0;
        let noviembre = 0;
        let diciembre = 0;
        listIngresos.filter(data => data.fecha[0] == year).forEach(data => {

            switch (data.fecha[1]) {
                case '01':
                    enero = enero + data.monto;
                    break;
                case '02':
                    febrero = febrero + data.monto;
                    break;
                case '03':
                    marzo = marzo + data.monto;
                    break;
                case '04':
                    abril = abril + data.monto;
                    break;
                case '05':
                    mayo = mayo + data.monto;
                    break;
                case '06':
                    junio = junio + data.monto;
                    break;
                case '07':
                    julio = julio + data.monto;
                    break;
                case '08':
                    agosto = agosto + data.monto;
                    break;
                case '09':
                    septiembre = septiembre + data.monto;
                    break;
                case '10':
                    octubre = octubre + data.monto;
                    break;
                case '11':
                    noviembre = noviembre + data.monto;
                    break;
                case '12':
                    diciembre = diciembre + data.monto;
                    break;

                default:
                    console.log('no coincide');
                    break;
            }




        });
        return [enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre];

    }


    extraerIngfo(listIngresos) {
        const result = listIngresos.filter(data => data.estadoPago === 'PAGADO').map(data => {
            let fecha = [];
            let dato = {};
            fecha = data.fecha.split('-');

            dato = { fecha: fecha, monto: data.monto };
            return dato;

        });
        return result;
    }
    extraerInfoRent(listIngreso) {
        const resul = listIngreso.filter(data => data.estado_pago == 'PAGADO').map(data => {
            let fecha = [];
            let dato = {};
            fecha = data.updatedAt.split('-');

            dato = { fecha: fecha, monto: data.totalArriendo };
            return dato;
        });
        return resul;
    }
}
module.exports = GetIngresosMensualesBusiness;