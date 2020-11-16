module.exports = {
	UsuarioBusiness: require("./administracion/usuario.business"),
	RolBusiness: require("./administracion/rol.business"),
	EmpresaBusiness: require("./administracion/empresa.business"),
	SucursalBusiness: require("./administracion/sucursal.business"),
	EgresoHostalBusiness: require("./hostal/egresoHostal.business"),
	IngresoHostalBusiness: require("./hostal/ingresoHostal.business"),
	ClienteBusiness: require("./administracion/cliente.business"),
	CausaBusiness: require("./abogados/causa.business"),
	ContratoClienteAbogadoBusiness: require("./abogados/contratoClienteAbogado.business"),
	CuotasContratoAbogadoBusiness: require("./abogados/cuotasContratoAbogados.business"),
	AbogadoBusiness: require("./abogados/abogado.business"),
	EgresoFirmaBusiness: require("./abogados/egresoFirma.business"),
};
