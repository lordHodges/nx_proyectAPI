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
const EgresoBancarioRoutes = require("../api/routes/egreso/egresoBancario.routes");
const EgresoCostoRoutes = require("../api/routes/egreso/egresoCosto.routes");
const EgresoGastoRoutes = require("../api/routes/egreso/egresoGasto.routes");
const EgresoImpuestoRoutes = require("../api/routes/egreso/egresoImpuesto.routes");
const EgresoRemuneracionRoutes = require("../api/routes/egreso/egresoRemuneracion.routes");
const EmpresaRoutes = require("../api/routes/empresa/empresa.routes");
const SucursalRoutes = require("../api/routes/sucursal/sucursal.routes");
const IngresoHostalRoutes = require("../api/routes/ingreso/ingresoHostal.routes");

// business
const {
  UsuarioBusiness,
  RolBusiness,
  EgresoBancarioBusiness,
  EgresoCostoBusiness,
  EgresoGastoBusiness,
  EgresoImpuestoBusiness,
  EgresoRemuneracionBusiness,
  EmpresaBusiness,
  SucursalBusiness,
  IngresoHostalBusiness,
} = require("../domain/business");

//controllers
const {
  UsuarioController,
  RolController,
  EgresoBancarioController,
  EgresoCostoController,
  EgresoGastoController,
  EgresoImpuestoController,
  EgresoRemuneracionController,
  EmpresaController,
  SucursalController,
  IngresoHostalController,
} = require("../api/controllers");

//services
const {
  UsuarioService,
  RolService,
  VerificarToken,
  EgresoBancarioService,
  EgresoCostoService,
  EgresoGastoService,
  EgresoImpuestoService,
  EgresoRemuneracionService,
  EmpresaService,
  SucursalService,
  IngresoHostalService,
} = require("../services");

//repositories
const {
  UsuarioRepository,
  RolRepository,
  EgresoBancarioRepository,
  EgresoGastoRepository,
  EgresoCostoRepository,
  EgresoImpuestoRepository,
  EgresoRemuneracionRepository,
  EmpresaRepository,
  SucursalRepository,
  IngresoHostalRepository,
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
    EmpresaRoutes: asFunction(EmpresaRoutes).singleton(),
    EmpresaController: asClass(EmpresaController).singleton(),
    SucursalRoutes: asFunction(SucursalRoutes).singleton(),
    SucursalController: asClass(SucursalController).singleton(),
    IngresoHostalController: asClass(IngresoHostalController).singleton(),
    IngresoHostalRoutes: asFunction(IngresoHostalRoutes).singleton(),
  })
  .register({
    config: asValue(config),
    db: asValue(db),
  })
  .register({
    UsuarioService: asClass(UsuarioService).singleton(),
    RolService: asClass(RolService).singleton(),
    VerificarToken: asClass(VerificarToken).singleton(),
    EgresoBancarioService: asClass(EgresoBancarioService).singleton(),
    EgresoCostoService: asClass(EgresoCostoService).singleton(),
    EgresoGastoService: asClass(EgresoGastoService).singleton(),
    EgresoImpuestoService: asClass(EgresoImpuestoService).singleton(),
    EgresoRemuneracionService: asClass(EgresoRemuneracionService).singleton(),
    EmpresaService: asClass(EmpresaService).singleton(),
    SucursalService: asClass(SucursalService).singleton(),
    IngresoHostalService: asClass(IngresoHostalService).singleton(),
  })
  .register({
    UsuarioRepository: asClass(UsuarioRepository).singleton(),
    RolRepository: asClass(RolRepository).singleton(),
    EgresoBancarioRepository: asClass(EgresoBancarioRepository).singleton(),
    EgresoCostoRepository: asClass(EgresoCostoRepository).singleton(),
    EgresoGastoRepository: asClass(EgresoGastoRepository).singleton(),
    EgresoRemuneracionRepository: asClass(
      EgresoRemuneracionRepository
    ).singleton(),
    EgresoImpuestoRepository: asClass(EgresoImpuestoRepository).singleton(),
    EmpresaRepository: asClass(EmpresaRepository).singleton(),
    SucursalRepository: asClass(SucursalRepository).singleton(),
    IngresoHostalRepository: asClass(IngresoHostalRepository).singleton(),
  })
  .register({
    UsuarioBusiness: asClass(UsuarioBusiness).singleton(),
    RolBusiness: asClass(RolBusiness).singleton(),
    EgresoBancarioBusiness: asClass(EgresoBancarioBusiness).singleton(),
    EgresoCostoBusiness: asClass(EgresoCostoBusiness).singleton(),
    EgresoGastoBusiness: asClass(EgresoGastoBusiness).singleton(),
    EgresoRemuneracionBusiness: asClass(EgresoRemuneracionBusiness).singleton(),
    EgresoImpuestoBusiness: asClass(EgresoImpuestoBusiness).singleton(),
    EmpresaBusiness: asClass(EmpresaBusiness).singleton(),
    SucursalBusiness: asClass(SucursalBusiness).singleton(),
    IngresoHostalBusiness: asClass(IngresoHostalBusiness).singleton(),
  });
module.exports = container;
//TODO agregar registros en container
