const { EgresoCostoDto } = require("../../dtos");
const mapper = require("automapper-js");
class EgresoCostoController {
  constructor({ EgresoCostoService }) {
    this._service = EgresoCostoService;
  }

  async getAll(req, res) {
    let egresosCostos = await this._service.getAll();
    egresosCostos = egresosCostos.map((e) => mapper(EgresoCostoDto, e));
    return res.status(200).send(egresosCostos);
  }
  async get(req, res) {
    const { id } = req.params;
    let egreso = await this._service.get(id);
    if (!egreso) {
      return res.status(404).send();
    }
    egreso = mapper(EgresoCostoDto, egreso);
    return res.status(200).send({
      payload: egreso,
    });
  }
  async create(req, res) {
    const { body } = req.params;
    let created = await this._service.create(body);

    const egresoCosto = mapper(EgresoCostoDto, created);
    return res.status(201).send({
      payload: egresoCosto,
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
module.exports = EgresoCostoController;
