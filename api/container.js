const { asClass, createContainer, asFunction, asValue } = require('awilix');
const { LOCAL } = require('../config/environments');
// app start
const StartUp = require('./startup');
const Server = require('./server');
const LocalServer = require('./local_server');
const config = require('../config/environments');

//IMPORTAR RUTAS
const Routes = require('../api/routes');
const UsuarioRoutes = require('../api/routes/usuario.routes');
const RolRoutes = require('../api/routes/rol.routes');
const AuthRoutes = require('../api/routes/auth.routes');
const EmpresaRoutes = require('../api/routes/empresa/empresa.routes');
const SucursalRoutes = require('../api/routes/sucursal/sucursal.routes');
const EgresoHostalRoutes = require('../api/routes/Hostal/egresoHostal.routes');
const IngresoHostalRoutes = require('../api/routes/Hostal/ingresoHostal.routes');
const EgresoLubricentroRoutes = require('../api/routes/Lubricentro/egresoLubricentro.routes');
const IngresoLubricentroRoutes = require('../api/routes/Lubricentro/ingresoLubricentro.routes');
const ClienteRoutes = require('../api/routes/cliente.routes');
const CausaRoutes = require('../api/routes/Abogados/causas.routes');
const ContratoClienteAbogadoRoutes = require('../api/routes/Abogados/contratoClienteAbogado.routes');
const CuotasContratoAbogadoRoutes = require('../api/routes/Abogados/cuotasContratoAbogado.routes');
const AbogadoRoutes = require('../api/routes/Abogados/abogado.routes');
const EgresoFirmaRoutes = require('../api/routes/Abogados/egresoFirma.routes');
const IngresoRentacarRoutes = require('../api/routes/Rentacar/ingresoRentacar.routes');
const EgresoRentacarRoutes = require('../api/routes/Rentacar/egresoRentacar.routes');
const BancoRoutes = require('../api/routes/banco.routes');
const ProyectoAgrofirmaRoutes = require('../api/routes/agrofirma/proyectoAgrofirma.routes');
const IngresoAgrofirmaRoutes = require('../api/routes/agrofirma/ingresoAgrofirma.routes');
const EgresoAgrofirmaRoutes = require('../api/routes/agrofirma/egresoAgrofirma.routes');
const EgresoInmobiliariaRoutes = require('../api/routes/Inmobiliaria/egresoInmobiliaria.routes');
const IngresoInmobiliariaRoutes = require('../api/routes/Inmobiliaria/ingresoInmobiliaria.routes');
const GetIngresosEgresosRoutes = require('../api/routes/getIngresosEgresos.routes');
const CuentasRegistradasRoutes = require('../api/routes/cuentasRegistradas.router');
const MovimientosCuentasRoutes = require('../api/routes/movmientosCuentas.routes');

//importar helpers
const { RequestApiHelper } = require('../helpers');
//importar middlewarez



//controllers
const {
	BancoController,
	UsuarioController,
	RolController,
	EmpresaController,
	SucursalController,
	EgresoHostalController,
	IngresoHostalController,
	EgresoLubricentroController,
	IngresoLubricentroController,
	ClienteController,
	CausaController,
	ContratoClienteAbogadoController,
	CuotasContratoAbogadoController,
	AbogadoController,
	EgresoFirmaController,
	IngresoRentacarController,
	EgresoRentacarController,
	ProyectoAgrofirmaController,
	IngresoAgrofirmaController,
	EgresoAgrofirmaController,
	EgresoInmobiliariaController,
	IngresoInmobiliariaController,
	GetIngresosEgresosController,
	CuentasRegistradasController,
	MovimientosCuentasController
} = require('../api/controllers');

// business
const {
	UsuarioBusiness,
	RolBusiness,
	EmpresaBusiness,
	SucursalBusiness,
	EgresoHostalBusiness,
	IngresoHostalBusiness,
	EgresoLubricentroBusiness,
	IngresoLubricentroBusiness,
	ClienteBusiness,
	CausaBusiness,
	ContratoClienteAbogadoBusiness,
	AbogadoBusiness,
	CuotasContratoAbogadoBusiness,
	EgresoFirmaBusiness,
	RentacarIngresosRequestBusiness,
	EgresoRentacarBusiness,
	BancoBusiness,
	ProyectoAgrofirmaBusiness,
	IngresoAgrofirmaBusiness,
	EgresoAgrofirmaBusiness,
	EgresoInmobiliariaBusiness,
	IngresoInmobiliariaBusiness,
	GetEgresosBusiness,
	GetIngresosBusiness,
	GetIngresosMensualesBusiness,
	CuentasRegistradasBusiness,
	MovimientosCuentasBusiness,
} = require('../domain/business');

//services
const {
	GetIngresosEgresosService,
	BancoService,
	UsuarioService,
	RolService,
	VerificarToken,
	EmpresaService,
	SucursalService,
	FileService,
	EgresoHostalService,
	IngresoHostalService,
	EgresoLubricentroService,
	IngresoLubricentroService,
	ClienteService,
	CausaService,
	ContratoClienteAbogadoService,
	CuotasContratoAbogadoService,
	AbogadoService,
	EgresoFirmaService,
	RentacarService,
	EgresoRentacarService,
	ProyectoAgrofirmaService,
	IngresoAgrofirmaService,
	CuentaBancariaService,
	EgresoAgrofirmaService,
	EgresoInmobiliariaService,
	IngresoInmobiliariaService,
	CuentasRegistradasService,
	MovimientosCuentasService
} = require('../services');

//repositories
const {
	BancoRepository,
	UsuarioRepository,
	RolRepository,
	EmpresaRepository,
	SucursalRepository,
	EgresoHostalRepository,
	IngresoHostalRepository,
	EgresoLubricentroRepository,
	IngresoLubricentroRepository,
	ClienteRepository,
	CausaRepository,
	ContratoClienteAbogadoRepository,
	CuotasContratoAbogadoRepository,
	EquipoRepository,
	AbogadoRepository,
	EgresoFirmaRepository,
	RentacarIngresosRequestRepository,
	EgresoRentacarRepository,
	ProyectoAgrofirmaRepository,
	IngresoAgrofirmaRepository,
	EgresoAgrofirmaRepository,
	EgresoInmobiliariaRepository,
	IngresoInmobiliariaRepository,
	CuentasRegistradasRepository,
	MovimientosCuentasRepository,
	RespaldoEgresoRepository,
	RespaldoIngresoRepository,

} = require('../dal/repositories');

//ENLACE A BD
const db = require('../dal/models/');


//INICIALIZAR CONTaINER
const container = createContainer();
// !register
container
	//configs
	.register({
		config: asValue(config),
		db: asValue(db),
	})
	//middlewarez

	//helpers
	.register({
		RequestApiHelper: asClass(RequestApiHelper).singleton(),
	})
	.register({
		app: asClass(StartUp).singleton(),
		router: asFunction(Routes).singleton(),
		server: asClass(Server).singleton(),
		localServer: asClass(LocalServer).singleton(),

		UsuarioController: asClass(UsuarioController).singleton(),
		UsuarioRoutes: asFunction(UsuarioRoutes).singleton(),
		RolController: asClass(RolController).singleton(),
		RolRoutes: asFunction(RolRoutes).singleton(),
		AuthRoutes: asFunction(AuthRoutes).singleton(),
		EmpresaRoutes: asFunction(EmpresaRoutes).singleton(),
		EmpresaController: asClass(EmpresaController).singleton(),
		SucursalRoutes: asFunction(SucursalRoutes).singleton(),
		SucursalController: asClass(SucursalController).singleton(),
		EgresoHostalRoutes: asFunction(EgresoHostalRoutes).singleton(),
		IngresoHostalRoutes: asFunction(IngresoHostalRoutes).singleton(),
		EgresoHostalController: asClass(EgresoHostalController).singleton(),
		IngresoHostalController: asClass(IngresoHostalController).singleton(),
		EgresoLubricentroRoutes: asFunction(EgresoLubricentroRoutes).singleton(),
		IngresoLubricentroRoutes: asFunction(IngresoLubricentroRoutes).singleton(),
		EgresoLubricentroController: asClass(
			EgresoLubricentroController
		).singleton(),
		IngresoLubricentroController: asClass(
			IngresoLubricentroController
		).singleton(),
		ClienteController: asClass(ClienteController).singleton(),
		ClienteRoutes: asFunction(ClienteRoutes).singleton(),
		CausaRoutes: asFunction(CausaRoutes).singleton(),
		CausaController: asClass(CausaController).singleton(),
		ContratoClienteAbogadoRoutes: asFunction(
			ContratoClienteAbogadoRoutes
		).singleton(),
		ContratoClienteAbogadoController: asClass(
			ContratoClienteAbogadoController
		).singleton(),
		CuotasContratoAbogadoRoutes: asFunction(
			CuotasContratoAbogadoRoutes
		).singleton(),
		CuotasContratoAbogadoController: asClass(
			CuotasContratoAbogadoController
		).singleton(),
		AbogadoRoutes: asFunction(AbogadoRoutes).singleton(),
		AbogadoController: asClass(AbogadoController).singleton(),
		EgresoFirmaRoutes: asFunction(EgresoFirmaRoutes).singleton(),
		EgresoFirmaController: asClass(EgresoFirmaController).singleton(),
		EgresoRentacarController: asClass(EgresoRentacarController).singleton(),
		EgresoRentacarRoutes: asFunction(EgresoRentacarRoutes).singleton(),
		IngresoRentacarController: asClass(IngresoRentacarController).singleton(),
		IngresoRentacarRoutes: asFunction(IngresoRentacarRoutes).singleton(),
		BancoRoutes: asFunction(BancoRoutes).singleton(),
		BancoController: asClass(BancoController).singleton(),
		ProyectoAgrofirmaRoutes: asFunction(ProyectoAgrofirmaRoutes).singleton(),
		ProyectoAgrofirmaController: asClass(
			ProyectoAgrofirmaController
		).singleton(),
		IngresoAgrofirmaRoutes: asFunction(IngresoAgrofirmaRoutes).singleton(),
		IngresoAgrofirmaController: asClass(IngresoAgrofirmaController).singleton(),
		EgresoAgrofirmaController: asClass(EgresoAgrofirmaController).singleton(),
		EgresoAgrofirmaRoutes: asFunction(EgresoAgrofirmaRoutes).singleton(),
		EgresoInmobiliariaRoutes: asFunction(EgresoInmobiliariaRoutes).singleton(),
		IngresoInmobiliariaRoutes: asFunction(
			IngresoInmobiliariaRoutes
		).singleton(),
		EgresoInmobiliariaController: asClass(
			EgresoInmobiliariaController
		).singleton(),
		IngresoInmobiliariaController: asClass(IngresoInmobiliariaController).singleton(),
		GetIngresosEgresosController: asClass(GetIngresosEgresosController).singleton(),
		GetIngresosEgresosRoutes: asFunction(GetIngresosEgresosRoutes).singleton(),
		CuentasRegistradasRoutes: asFunction(CuentasRegistradasRoutes).singleton(),
		CuentasRegistradasController: asClass(CuentasRegistradasController).singleton(),
		MovimientosCuentasRoutes: asFunction(MovimientosCuentasRoutes).singleton(),
		MovimientosCuentasController: asClass(MovimientosCuentasController).singleton(),
	})

	.register({
		UsuarioService: asClass(UsuarioService).singleton(),
		RolService: asClass(RolService).singleton(),
		VerificarToken: asClass(VerificarToken).singleton(),
		EmpresaService: asClass(EmpresaService).singleton(),
		SucursalService: asClass(SucursalService).singleton(),
		FileService: asClass(FileService).singleton(),
		EgresoHostalService: asClass(EgresoHostalService).singleton(),
		IngresoHostalService: asClass(IngresoHostalService).singleton(),
		EgresoLubricentroService: asClass(EgresoLubricentroService).singleton(),
		IngresoLubricentroService: asClass(IngresoLubricentroService).singleton(),
		ClienteService: asClass(ClienteService).singleton(),
		CausaService: asClass(CausaService).singleton(),
		ContratoClienteAbogadoService: asClass(
			ContratoClienteAbogadoService
		).singleton(),
		CuotasContratoAbogadoService: asClass(
			CuotasContratoAbogadoService
		).singleton(),
		AbogadoService: asClass(AbogadoService).singleton(),
		EgresoFirmaService: asClass(EgresoFirmaService).singleton(),
		RentacarService: asClass(RentacarService).singleton(),
		EgresoRentacarService: asClass(EgresoRentacarService).singleton(),
		BancoService: asClass(BancoService).singleton(),
		ProyectoAgrofirmaService: asClass(ProyectoAgrofirmaService).singleton(),
		IngresoAgrofirmaService: asClass(IngresoAgrofirmaService).singleton(),
		EgresoAgrofirmaService: asClass(EgresoAgrofirmaService).singleton(),
		EgresoInmobiliariaService: asClass(EgresoInmobiliariaService).singleton(),
		IngresoInmobiliariaService: asClass(IngresoInmobiliariaService).singleton(),
		GetIngresosEgresosService: asClass(
			GetIngresosEgresosService
		).singleton(),
		CuentasRegistradasService: asClass(CuentasRegistradasService).singleton(),
		MovimientosCuentasService: asClass(MovimientosCuentasService).singleton(),

	})
	.register({
		UsuarioRepository: asClass(UsuarioRepository).singleton(),
		RolRepository: asClass(RolRepository).singleton(),
		EmpresaRepository: asClass(EmpresaRepository).singleton(),
		SucursalRepository: asClass(SucursalRepository).singleton(),
		EgresoHostalRepository: asClass(EgresoHostalRepository).singleton(),
		IngresoHostalRepository: asClass(IngresoHostalRepository).singleton(),
		EgresoLubricentroRepository: asClass(
			EgresoLubricentroRepository
		).singleton(),
		IngresoLubricentroRepository: asClass(
			IngresoLubricentroRepository
		).singleton(),
		ClienteRepository: asClass(ClienteRepository).singleton(),
		CausaRepository: asClass(CausaRepository).singleton(),
		ContratoClienteAbogadoRepository: asClass(
			ContratoClienteAbogadoRepository
		).singleton(),
		CuotasContratoAbogadoRepository: asClass(
			CuotasContratoAbogadoRepository
		).singleton(),
		EquipoRepository: asClass(EquipoRepository).singleton(),
		AbogadoRepository: asClass(AbogadoRepository).singleton(),
		EgresoFirmaRepository: asClass(EgresoFirmaRepository).singleton(),
		RentacarIngresosRequestRepository: asClass(
			RentacarIngresosRequestRepository
		).singleton(),
		EgresoRentacarRepository: asClass(EgresoRentacarRepository).singleton(),
		BancoRepository: asClass(BancoRepository).singleton(),
		ProyectoAgrofirmaRepository: asClass(
			ProyectoAgrofirmaRepository
		).singleton(),
		IngresoAgrofirmaRepository: asClass(IngresoAgrofirmaRepository).singleton(),
		EgresoAgrofirmaRepository: asClass(EgresoAgrofirmaRepository).singleton(),
		EgresoInmobiliariaRepository: asClass(
			EgresoInmobiliariaRepository
		).singleton(),
		IngresoInmobiliariaRepository: asClass(
			IngresoInmobiliariaRepository
		).singleton(),
		CuentasRegistradasRepository: asClass(CuentasRegistradasRepository).singleton(),
		MovimientosCuentasRepository: asClass(MovimientosCuentasRepository).singleton(),
		RespaldoIngresoRepository: asClass(RespaldoIngresoRepository).singleton(),
		RespaldoEgresoRepository: asClass(RespaldoEgresoRepository).singleton(),
	})
	.register({

		UsuarioBusiness: asClass(UsuarioBusiness).singleton(),
		RolBusiness: asClass(RolBusiness).singleton(),
		EmpresaBusiness: asClass(EmpresaBusiness).singleton(),
		SucursalBusiness: asClass(SucursalBusiness).singleton(),
		EgresoHostalBusiness: asClass(EgresoHostalBusiness).singleton(),
		IngresoHostalBusiness: asClass(IngresoHostalBusiness).singleton(),
		EgresoLubricentroBusiness: asClass(EgresoLubricentroBusiness).singleton(),
		IngresoLubricentroBusiness: asClass(IngresoLubricentroBusiness).singleton(),
		ClienteBusiness: asClass(ClienteBusiness).singleton(),
		CausaBusiness: asClass(CausaBusiness).singleton(),
		ContratoClienteAbogadoBusiness: asClass(
			ContratoClienteAbogadoBusiness
		).singleton(),
		CuotasContratoAbogadoBusiness: asClass(
			CuotasContratoAbogadoBusiness
		).singleton(),
		AbogadoBusiness: asClass(AbogadoBusiness).singleton(),
		EgresoFirmaBusiness: asClass(EgresoFirmaBusiness).singleton(),
		RentacarIngresosRequestBusiness: asClass(
			RentacarIngresosRequestBusiness
		).singleton(),
		EgresoRentacarBusiness: asClass(EgresoRentacarBusiness).singleton(),
		BancoBusiness: asClass(BancoBusiness).singleton(),
		ProyectoAgrofirmaBusiness: asClass(ProyectoAgrofirmaBusiness).singleton(),
		IngresoAgrofirmaBusiness: asClass(IngresoAgrofirmaBusiness).singleton(),
		EgresoAgrofirmaBusiness: asClass(EgresoAgrofirmaRepository).singleton(),
		EgresoInmobiliariaBusiness: asClass(EgresoInmobiliariaBusiness).singleton(),
		IngresoInmobiliariaBusiness: asClass(
			IngresoInmobiliariaBusiness
		).singleton(),
		GetIngresosBusiness: asClass(
			GetIngresosBusiness
		).singleton(),
		GetEgresosBusiness: asClass(
			GetEgresosBusiness
		).singleton(),
		GetIngresosMensualesBusiness: asClass(GetIngresosMensualesBusiness).singleton(),
		CuentasRegistradasBusiness: asClass(CuentasRegistradasBusiness).singleton(),
		MovimientosCuentasBusiness: asClass(MovimientosCuentasBusiness).singleton(),
	});
module.exports = container;
