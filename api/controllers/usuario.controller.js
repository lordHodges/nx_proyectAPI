const mapper = require("automapper-js");
const { UsuarioDto } = require("../dtos");
const jwt = require("jsonwebtoken");

class UsuarioController {
	constructor({ UsuarioService, config }) {
		this._usuarioService = UsuarioService;
		this._config = config;
	}

	async getUsuarios(req, res) {
		let usuarios = await this._usuarioService.getAll();
		//  usuarios = usuarios.map((usuario) => mapper(UsuarioDto, usuario));
		return res.status(200).send(usuarios);
	}
	async getUsuario(req, res) {
		const { id } = req.params;
		let usuario = await this._usuarioService.get(id);
		if (!usuario) {
			return res.status(404).send();
		}
		//  usuario = mapper(UsuarioDto, usuario);
		return res.send({
			payload: usuario,
		});
	}
	async getByName(req, res) {
		const { nombreUsuario } = req.params;
		let usuario = await this._usuarioService.getByName(nombreUsuario);
		if (!usuario) {
			return res.status(404).send();
		}
		//  usuario = mapper(UsuarioDto, usuario);

		return res.send({
			payload: usuario,
		});
	}

	async createUsuario(req, res) {
		const { body } = req;
		body.hash = await this._usuarioService.encriptarPassword(body.hash);
		const createdUsuario = await this._usuarioService.create(body);

		//const usuario = mapper(UsuarioDto, createdUsuario);
		const token = jwt.sign({ id: createdUsuario.id }, this._config.SECRET, {
			expiresIn: 60 * 60 * 24,
		});

		return res.status(201).send({
			payload: { createdUsuario, token },
		});
	}
	async updateUsuario(req, res) {
		const { body } = req;
		const { id } = req.params;
		if (body.hash == null || body.hash == "") {
			let u = await this._usuarioService.get(id);
			u = mapper(UsuarioDto, u);
			body.hash = u.hash;
		} else {
			body.hash = await this._usuarioService.encriptarPassword(body.hash);
		}

		const updated = await this._usuarioService.update(id, body);
		return res.status(201).send(updated);
	}
	async deleteUsuario(req, res) {
		const { id } = req.params;

		await this._usuarioService.delete(id);
		return res.status(204).send();
	}
	async login(req, res) {
		const { body } = req;
		let usuario = await this._usuarioService.getByName(body.nombreUsuario);
		if (!usuario) {
			return res
				.status(401)
				.send({ message: "algo anda mal, intente nuevamente!" });
		}
		const _usuario = mapper(UsuarioDto, usuario);
		if (!_usuario) {
			return res
				.status(401)
				.send({ message: "algo anda mal, intente nuevamente!" });
		}
		const validPass = await this._usuarioService.compararPassword(
			body.hash,
			_usuario.hash
		);
		if (!validPass) {
			return res
				.status(401)
				.send({ message: "algo anda mal, intente otra combinacion!" });
		}
		const token = jwt.sign({ id: _usuario.id }, this._config.SECRET, {
			expiresIn: 60 * 60 * 24,
		});
		let id = usuario.id;
		let nombreUsuario = usuario.nombreUsuario;
		let nombre = usuario.nombre;
		let apellido = usuario.apellido;

		return res.json({
			id,
			nombreUsuario,
			nombre,
			apellido,
			token,
		});
	}
}
module.exports = UsuarioController;
