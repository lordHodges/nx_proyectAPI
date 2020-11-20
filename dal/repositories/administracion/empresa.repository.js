const BaseRepository = require("../base.repository");

class EmpresaRepository extends BaseRepository {
	constructor({ db }) {
		super(db, "Empresa");
		this._db = db;
		this.empresa = "Empresa";
	}
	getAllWithSucursal() {
		return this._db[this.empresa].findAll({
			/* attributes: [
				"razonSocial",
				[
					this._db.sequelize.fn(
						"count",
						this._db.sequelize.col("Sucursals.idEmpresa")
					),
					"cantidad Sucursales",
				],
			], */
			include: [
				{
					model: this._db.Sucursal,
				},
			],
			/* group: ["Sucursals.idEmpresa"],
			raw: true, */
		});
	}
	getOneWithSucursal(id) {
		return this._db[this.entity].findOne({
			include: [{ model: this._db.Sucursal }],
			where: { id },
		});
	}
}

module.exports = EmpresaRepository;
