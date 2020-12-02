module.exports = {
	UsuarioBusiness: require("./administracion/usuario.business"),
	RolBusiness: require("./administracion/rol.business"),
	EmpresaBusiness: require("./administracion/empresa.business"),
	SucursalBusiness: require("./administracion/sucursal.business"),
	EgresoHostalBusiness: require("./hostal/egresoHostal.business"),
	IngresoHostalBusiness: require("./hostal/ingresoHostal.business"),
	EgresoLubricentroBusiness: require("./lubricentro/egresoLubricentro.business"),
	IngresoLubricentroBusiness: require("./lubricentro/ingresoLubricentro.business"),
	ClienteBusiness: require("./administracion/cliente.business"),
	CausaBusiness: require("./abogados/causa.business"),
	ContratoClienteAbogadoBusiness: require("./abogados/contratoClienteAbogado.business"),
	CuotasContratoAbogadoBusiness: require("./abogados/cuotasContratoAbogados.business"),
	AbogadoBusiness: require("./abogados/abogado.business"),
	EgresoFirmaBusiness: require("./abogados/egresoFirma.business"),
	RentacarIngresosRequestBusiness: require("./rentacar/rentacarIngresosRequest.business.js"),
	CostoLubricentroBusiness: require("./lubricentro/costoLubricentro.business"),

};
