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

// business
const {
  UsuarioBusiness,
  RolBusiness,
  EmpresaBusiness,
  SucursalBusiness,
  EgresoHostalBusiness,
} = require("../domain/business");

//controllers
const {
  UsuarioController,
  RolController,
  EmpresaController,
  SucursalController,
  EgresoHostalController,
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
} = require("../services");

//repositories
const {
  UsuarioRepository,
  RolRepository,
  EmpresaRepository,
  SucursalRepository,
  EgresoHostalRepository,
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
    EmpresaRoutes: asFunction(EmpresaRoutes).singleton(),
    EmpresaController: asClass(EmpresaController).singleton(),
    SucursalRoutes: asFunction(SucursalRoutes).singleton(),
    SucursalController: asClass(SucursalController).singleton(),
    EgresoHostalRoutes: asFunction(EgresoHostalRoutes).singleton(),
    EgresoHostalController: asClass(EgresoHostalController).singleton(),
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
  })
  .register({
    UsuarioRepository: asClass(UsuarioRepository).singleton(),
    RolRepository: asClass(RolRepository).singleton(),
    EmpresaRepository: asClass(EmpresaRepository).singleton(),
    SucursalRepository: asClass(SucursalRepository).singleton(),
    EgresoHostalRepository: asClass(EgresoHostalRepository).singleton(),
  })
  .register({
    UsuarioBusiness: asClass(UsuarioBusiness).singleton(),
    RolBusiness: asClass(RolBusiness).singleton(),
    EmpresaBusiness: asClass(EmpresaBusiness).singleton(),
    SucursalBusiness: asClass(SucursalBusiness).singleton(),
    EgresoHostalBusiness: asClass(EgresoHostalBusiness).singleton(),
  });
module.exports = container;
//TODO agregar registros en container
