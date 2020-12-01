module.exports = {
	//?administracion

	RolRepository: require("./administracion/rol.repository"),
	UsuarioRepository: require("./administracion/usuario.repository"),
	EmpresaRepository: require("./administracion/empresa.repository"),
	SucursalRepository: require("./administracion/sucursal.repository"),
	ClienteRepository: require("./administracion/cliente.repository"),

	//?hostal
	EgresoHostalRepository: require("./hostal/egresoHostal.repository"),
	IngresoHostalRepository: require("./hostal/ingresoHostal.repository"),

	//?lubricentro
	EgresoLubricentroRepository: require("./lubricentro/egresoLubricentro.repository"),
	IngresoLubricentroRepository: require("./lubricentro/ingresoLubricentro.repository"),

	//?abogados
	CausaRepository: require("./abogados/causa.repository"),
	ContratoClienteAbogadoRepository: require("./abogados/constratoClienteAbogado.repository"),
	CuotasContratoAbogadoRepository: require("./abogados/cuotasContratoAbogado.repository"),
	EquipoRepository: require("./abogados/equipo.repository"),
	AbogadoRepository: require("./abogados/abogado.repository"),
	EgresoFirmaRepository: require("./abogados/egresoFirma.repository"),
	RentacarIngresosRequestRepository: require("./rentacar/rentacarIngresosRequest.repository"),
	EgresoRentacarRepository: require("./rentacar/egresoRentacar.repository"),
	BancoRepository: require("./administracion/banco.repository"),
};
