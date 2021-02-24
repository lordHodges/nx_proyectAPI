class GetEgresosBusiness {
	constructor({
		EgresoHostalRepository,
		EgresoInmobiliariaRepository,
		EgresoLubricentroRepository,
		EgresoRentacarRepository,
		EgresoAgrofirmaRepository,
	}) {
		this._hostalRepository = EgresoHostalRepository;
		this._inmobiliariaRepository = EgresoInmobiliariaRepository;
		this._lubricentroRepository = EgresoLubricentroRepository;
		this._rentacarRepository = EgresoRentacarRepository;
		this._agrofirmaRepository = EgresoAgrofirmaRepository;
	}
	async getEgresos() {
		let egresosHostal = await this._hostalRepository.getAllWithJoins();
		let egresosInmobiliaria = await this._inmobiliariaRepository.getAllWithJoins();
		let egresosLubricentro = await this._lubricentroRepository.getAllWithJoins();
		let egresosRentacar = await this._rentacarRepository.getAllWithJoins();
		let egresosAgrofirma = await this._agrofirmaRepository.getAll();

		/* formating data */
		egresosHostal = await this.formatearTotalesEgresos(egresosHostal);
		egresosInmobiliaria = await this.formatearTotalesEgresos(
			egresosInmobiliaria
		);
		egresosLubricentro = await this.formatearTotalesEgresos(
			egresosLubricentro
		);
        egresosRentacar = await this.formatearTotalesEgresos(
			egresosRentacar
		);
		

		let totalAgro = 0;
		egresosAgrofirma
			.filter((data) => data.estadoPago === 'PAGADO')
			.forEach((data) => {
				totalAgro = totalAgro + data.monto;
			});
		egresosAgrofirma = totalAgro;

		return [
			egresosHostal,
			egresosInmobiliaria,
			egresosLubricentro,
			egresosRentacar,
			egresosAgrofirma,
		];
	}



	formatearTotalesEgresos(ingresoList) {
		let egresoTotal = 0;
		ingresoList
			.forEach((data) => {
				egresoTotal = egresoTotal + data.monto;
			});

		return egresoTotal;
	}
}
module.exports = GetEgresosBusiness;
