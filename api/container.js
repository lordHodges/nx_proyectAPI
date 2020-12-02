const { asClass, createContainer, asFunction, asValue } = require("awilix");

// app start
const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config/environments");

//IMPORTAR RUTAS
const Routes = require("../api/routes");
const UsuarioRoutes = require("../api/routes/usuario.routes");
const RolRoutes = require("../api/routes/rol.routes");
const AuthRoutes = require("../api/routes/auth.routes");
const EmpresaRoutes = require("../api/routes/empresa/empresa.routes");
const SucursalRoutes = require("../api/routes/sucursal/sucursal.routes");
const EgresoHostalRoutes = require("../api/routes/Hostal/egresoHostal.routes");
const IngresoHostalRoutes = require("../api/routes/Hostal/ingresoHostal.routes");
const EgresoLubricentroRoutes = require("../api/routes/Lubricentro/egresoLubricentro.routes");
const IngresoLubricentroRoutes = require("../api/routes/Lubricentro/ingresoLubricentro.routes");
const ClienteRoutes = require("../api/routes/cliente.routes");
const CausaRoutes = require("../api/routes/Abogados/causas.routes");
const ContratoClienteAbogadoRoutes = require("../api/routes/Abogados/contratoClienteAbogado.routes");
const CuotasContratoAbogadoRoutes = require("../api/routes/Abogados/cuotasContratoAbogado.routes");
const AbogadoRoutes = require("../api/routes/Abogados/abogado.routes");
const EgresoFirmaRoutes = require("../api/routes/Abogados/egresoFirma.routes");
const IngresoRentacarRoutes = require("../api/routes/Rentacar/ingresoRentacar.routes");
const CostoLubricentroRoutes = require("../api/routes/Lubricentro/costoLubricentro.routes");


//importar helpers
const { RequestApiHelper } = require("../helpers");

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
	CuotasContratoAbogadoBusiness,
	AbogadoBusiness,
	EgresoFirmaBusiness,
	RentacarIngresosRequestBusiness,
	CostoLubricentroBusiness,

} = require("../domain/business");

//controllers
const {
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
	CostoLubricentroController,

} = require("../api/controllers");

//services
const {
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
	CostoLubricentroService,

} = require("../services");

//repositories
const {
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
	CostoLubricentroRepository,

} = require("../dal/repositories");

//ENLACE A BD
const db = require("../dal/models/");
const cuotasContratoAbogadoRoutes = require("../api/routes/Abogados/cuotasContratoAbogado.routes");
const egresoFirma = require("../dal/models/egresoFirma");

//INICIALIZAR CONTaINER
const container = createContainer();

container
	.register({
		RequestApiHelper: asClass(RequestApiHelper).singleton(),
	})
	.register({
		app: asClass(StartUp).singleton(),
		router: asFunction(Routes).singleton(),
		server: asClass(Server).singleton(),
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
		IngresoRentacarController: asClass(IngresoRentacarController).singleton(),
		IngresoRentacarRoutes: asFunction(IngresoRentacarRoutes).singleton(),
		CostoLubricentroRoutes: asFunction(CostoLubricentroRoutes).singleton(),
		CostoLubricentroController: asClass(CostoLubricentroController).singleton(),

	})
	.register({
		config: asValue(config),
		db: asValue(db),
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
		CostoLubricentroBusiness: asClass(CostoLubricentroService).singleton(),

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
		CostoLubricentroRepository: asClass(CostoLubricentroRepository).singleton(),

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
		CostoLubricentroBusiness: asClass(CostoLubricentroBusiness).singleton(),

	});
module.exports = container;
