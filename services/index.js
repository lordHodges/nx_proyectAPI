module.exports = {
  UsuarioService: require("./usuario.service"),
  RolService: require("./rol.service"),
  VerificarToken: require("./verificarToken.service"),
  IngresoRentacarService: require("./rentacar/ingresoRentacar.service"),
  EgresoBancarioService: require("./egreso/egresoBancario.service"),
  EgresoCostoService: require("./egreso/egresoCosto.service"),
  EgresoGastoService: require("./egreso/egresoGasto.service"),
  EgresoImpuestoService: require("./egreso/egresoImpuesto.service"),
  EgresoRemuneracionService: require("./egreso/egresoRemuneracion.service"),
  SucursalService: require("./sucursal.service"),
  EmpresaService: require("./empresa.service"),
};
