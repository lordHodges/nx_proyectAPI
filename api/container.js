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
const IngresoRentacarRoutes = require("../api/routes/rentacar/ingresoRentacar.routes");
const EgresoBancarioRoutes = require("../api/routes/egreso/egresoBancario.routes");
const EgresoCostoRoutes = require("../api/routes/egreso/egresoCosto.routes");
const EgresoGastoRoutes = require("../api/routes/egreso/egresoGasto.routes");
const EgresoImpuestoRoutes = require("../api/routes/egreso/egresoImpuesto.routes");
const EgresoRemuneracionRoutes = require("../api/routes/egreso/egresoRemuneracion.routes");

// business
const {
  UsuarioBusiness,
  RolBusiness,
  IngresoRentacarBusiness,
  EgresoBancarioBusiness,
  EgresoCostoBusiness,
  EgresoGastoBusiness,
  EgresoImpuestoBusiness,
  EgresoRemuneracionBusiness,
  EmpresaBusiness,
  SucursalBusiness,
} = require("../domain/business");

//controllers
const {
  UsuarioController,
  RolController,
  IngresoRentacarController,
  EgresoBancarioController,
  EgresoCostoController,
  EgresoGastoController,
  EgresoImpuestoController,
  EgresoRemuneracionController,
} = require("../api/controllers");

//services
const {
  UsuarioService,
  RolService,
  VerificarToken,
  IngresoRentacarService,
  EgresoBancarioService,
  EgresoCostoService,
  EgresoGastoService,
  EgresoImpuestoService,
  EgresoRemuneracionService,
  EmpresaService,
  SucursalService,
} = require("../services");

//repositories
const {
  UsuarioRepository,
  RolRepository,
  IngresoRentacarRepository,
  EgresoBancarioRepository,
  EgresoGastoRepository,
  EgresoCostoRepository,
  EgresoImpuestoRepository,
  EgresoRemuneracionRepository,
  EmpresaRepository,
  SucursalRepository,
} = require("../dal/repositories");

//ENLACE A BD
const db = require("../dal/models/");

//INICIALIZAR CONTaINER
const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
    UsuarioController: asClass(UsuarioController).singleton(),
    UsuarioRoutes: asFunction(UsuarioRoutes).singleton(),
    RolController: asClass(RolController).singleton(),
    RolRoutes: asFunction(RolRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    IngresoRentacarController: asClass(IngresoRentacarController).singleton(),
    IngresoRentacarRoutes: asFunction(IngresoRentacarRoutes).singleton(),
    EgresoBancarioController: asClass(EgresoBancarioController).singleton(),
    EgresoBancarioRoutes: asFunction(EgresoBancarioRoutes).singleton(),
    EgresoCostoController: asClass(EgresoCostoController).singleton(),
    EgresoCostoRoutes: asFunction(EgresoCostoRoutes).singleton(),
    EgresoGastoController: asClass(EgresoGastoController).singleton(),
    EgresoGastoRoutes: asFunction(EgresoGastoRoutes).singleton(),
    EgresoImpuestoController: asClass(EgresoImpuestoController).singleton(),
    EgresoImpuestoRoutes: asFunction(EgresoImpuestoRoutes).singleton(),
    EgresoRemuneracionController: asClass(
      EgresoRemuneracionController
    ).singleton(),
    EgresoRemuneracionRoutes: asFunction(EgresoRemuneracionRoutes).singleton(),
  })
  .register({
    config: asValue(config),
    db: asValue(db),
  })
  .register({
    UsuarioService: asClass(UsuarioService).singleton(),
    RolService: asClass(RolService).singleton(),
    VerificarToken: asClass(VerificarToken).singleton(),
    IngresoRentacarService: asClass(IngresoRentacarService).singleton(),
    EgresoBancarioService: asClass(EgresoBancarioBusiness).singleton(),
    EgresoCostoService: asClass(EgresoCostoService).singleton(),
    EgresoGastoService: asClass(EgresoGastoService).singleton(),
    EgresoImpuestoService: asClass(EgresoImpuestoService).singleton(),
    EgresoRemuneracionService: asClass(EgresoRemuneracionService).singleton(),
    EmpresaService: asClass(EmpresaService).singleton(),
    SucursalService: asClass(SucursalService).singleton(),
  })
  .register({
    UsuarioRepository: asClass(UsuarioRepository).singleton(),
    RolRepository: asClass(RolRepository).singleton(),
    IngresoRentacarRepository: asClass(IngresoRentacarRepository).singleton(),
    EgresoBancarioRepository: asClass(EgresoBancarioRepository).singleton(),
    EgresoCostoRepository: asClass(EgresoCostoRepository).singleton(),
    EgresoGastoRepository: asClass(EgresoGastoRepository).singleton(),
    EgresoRemuneracionRepository: asClass(
      EgresoRemuneracionRepository
    ).singleton(),
    EgresoImpuestoRepository: asClass(EgresoImpuestoRepository).singleton(),
    EmpresaRepository: asClass(EmpresaRepository).singleton(),
    SucursalRepository: asClass(SucursalRepository).singleton(),
  })
  .register({
    UsuarioBusiness: asClass(UsuarioBusiness).singleton(),
    RolBusiness: asClass(RolBusiness).singleton(),
    IngresoRentacarBusiness: asClass(IngresoRentacarBusiness).singleton(),
    EgresoBancarioBusiness: asClass(EgresoBancarioBusiness).singleton(),
    EgresoCostoBusiness: asClass(EgresoCostoBusiness).singleton(),
    EgresoGastoBusiness: asClass(EgresoGastoBusiness).singleton(),
    EgresoRemuneracionBusiness: asClass(EgresoRemuneracionBusiness).singleton(),
    EgresoImpuestoBusiness: asClass(EgresoImpuestoBusiness).singleton(),
    EmpresaBusiness: asClass(EmpresaBusiness).singleton(),
    SucursalBusiness: asClass(SucursalBusiness).singleton(),
  });
module.exports = container;
//TODO agregar registros en container
