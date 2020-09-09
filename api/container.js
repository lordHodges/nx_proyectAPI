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

// business
const { UsuarioBusiness, RolBusiness } = require("../domain");

//controllers
const { UsuarioController, RolController } = require("../api/controllers");

//services
const { UsuarioService, RolService, VerificarToken } = require("../services");

//repositories
const { UsuarioRepository, RolRepository } = require("../dal/repositories");

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
  })
  .register({
    config: asValue(config),
    db: asValue(db),
  })
  .register({
    UsuarioService: asClass(UsuarioService).singleton(),
    RolService: asClass(RolService).singleton(),
    VerificarToken: asClass(VerificarToken).singleton(),
  })
  .register({
    UsuarioRepository: asClass(UsuarioRepository).singleton(),
    RolRepository: asClass(RolRepository).singleton(),
  })
  .register({
    UsuarioBusiness: asClass(UsuarioBusiness).singleton(),
    RolBusiness: asClass(RolBusiness).singleton(),
  });
module.exports = container;
//TODO agregar registros en container
