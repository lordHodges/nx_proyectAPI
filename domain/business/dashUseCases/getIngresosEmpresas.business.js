class GetIngresosBusiness {
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
	async getIngresos() {
		let ingresosHostal = await this._hostalRepository.getAllWithJoins();
		let ingresosInmobiliaria = await this._inmobiliariaRepository.getAllWithJoins();
		let ingresosLubricentro = await this._lubricentroRepository.getAllWithJoins();
		let ingresosRentacar = await this._rentacarRepository.getArriendos();
		let ingresosAgrofirma = await this._agrofirmaRepository.obtenerIngresos();

		/* formating data */
		ingresosHostal = await this.formatearTotalesIngresos(ingresosHostal);
		ingresosInmobiliaria = await this.formatearTotalesIngresos(
			ingresosInmobiliaria
		);
		ingresosLubricentro = await this.formatearTotalesIngresos(
			ingresosLubricentro
		);

		let totalRent = 0;
		ingresosRentacar.data
			.filter((data) => data.estado_arriendo === 'FINALIZADO')
			.forEach((data) => {
				totalRent = totalRent + data.totalArriendo;
			});
		ingresosRentacar = totalRent;

		let totalAgro = 0;
		ingresosAgrofirma
			.filter((data) => data.estadoPago === 'PAGADO')
			.forEach((data) => {
				totalAgro = totalAgro + data.monto;
			});
		ingresosAgrofirma = totalAgro;

		return [
			ingresosHostal,
			ingresosInmobiliaria,
			ingresosLubricentro,
			ingresosRentacar,
			ingresosAgrofirma,
		];
	}



	formatearTotalesIngresos(ingresoList) {
		let ingresoTotal = 0;
		ingresoList
			.filter((data) => data.estadoPago === 'PAGADO')
			.forEach((data) => {
				ingresoTotal = ingresoTotal + data.monto;
			});

		return ingresoTotal;
	}
}
module.exports = GetIngresosBusiness;
