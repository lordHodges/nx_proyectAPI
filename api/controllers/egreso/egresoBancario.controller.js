const { EgresoBancarioDto } = require("../../dtos");
const mapper = require("automapper-js");
class EgresoBancarioController {
  constructor({ EgresoBancarioService }) {
    this._service = EgresoBancarioService;
  }

  async getAll(req, res) {
    let egresosBancarios = await this._service.getAll();
    egresosBancarios = egresosBancarios.map((e) =>
      mapper(EgresoBancarioDto, e)
    );
    return res.status(200).send(egresosBancarios);
  }
  async get(req, res) {
    const { id } = req.params;
    let egreso = await this._service.get(id);
    if (!egreso) {
      return res.status(404).send();
    }
    egreso = mapper(EgresoBancarioDto, egreso);
    return res.status(200).send({
      payload: egreso,
    });
  }
  async create(req, res) {
    const { body } = req;
    let created = await this._service.create(body);

    const egresoBancario = mapper(EgresoBancarioDto, created);
    return res.status(201).send({
      payload: egresoBancario,
    });
  }
  async update(req, res) {
    const { body } = req;
    const { id } = req.params;
    let e = await this._service.update(id, body);
    return res.status(201).send(e);
  }
  async delete(req, res) {
    const { id } = req.params;
    await this._service.delete(id);
    return res.status(204).send();
  }
}
module.exports = EgresoBancarioController;
