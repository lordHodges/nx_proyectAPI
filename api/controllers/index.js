module.exports = {
	UsuarioController: require("./usuario.controller"),
	RolController: require("./rol.controller"),
	EmpresaController: require("./empresa/empresa.controller"),
	SucursalController: require("./sucursal/sucursal.controller"),
	EgresoHostalController: require("./Hostal/egresoHostal.controller.js"),
	IngresoHostalController: require("./Hostal/ingresoHostal.controller.js"),
	EgresoLubricentroController: require("./Lubricentro/egresoLubricentro.controller.js"),
	IngresoLubricentroController: require("./Lubricentro/ingresoLubricentro.controller.js"),
	ClienteController: require("./cliente.controller"),
	CausaController: require("./Abogados/causa.controller"),
	ContratoClienteAbogadoController: require("./Abogados/contratoClienteAbogado.controller"),
	CuotasContratoAbogadoController: require("./Abogados/cuotasContratoAbogado.controller"),
	AbogadoController: require("./Abogados/abogado.controller.js"),
	EgresoFirmaController: require("./Abogados/egresoFirma.controller"),
	IngresoRentacarController: require("./Rentacar/ingresoRentacar.controller"),
	
};
