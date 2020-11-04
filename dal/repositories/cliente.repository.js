const BaseRepository = require("./base.repository");

class ClienteRepository extends BaseRepository {
	constructor({ db }) {
		super(db, "Cliente");
	}
	async crearSinoExiste(rut) {
		//const clienteCreado = await this._db.Cliente.findOrCreate();
		const [cliente, created] = await this._db.Cliente.findOrCreate({
			where: { rut: rut },
			defaults: {
				nombre: "cliente no encontrado llenar campos",
				fono: "cliente no encontrado llenar campos",
				email: "cliente no encontrado llenar campos",
				direccion: "cliente no encontrado llenar campos",
			},
		});
		return [cliente, created];
	}
	async guardarCliente(rut, cliente) {
		return this._db.Cliente.update(cliente, {
			where: { rut: rut },
		});
	}
}

module.exports = ClienteRepository;
