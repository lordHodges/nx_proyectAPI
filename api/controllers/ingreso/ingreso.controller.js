const { IngresoDto } = require("../../dtos");
const mapper = require("automapper-js");
class IngresoController {
  constructor({ IngresoService }) {
    this._service = IngresoService;
  }

  async getAll(req, res) {
    let ingresos = await this._service.getAll();
    ingresos = ingresos.map((e) => mapper(IngresoDto, e));
    return res.status(200).send(ingresos);
  }
  async get(req, res) {
    const { id } = req.params;
    let ingreso = await this._service.get(id);
    if (!ingreso) {
      return res.status(404).send();
    }
    ingreso = mapper(IngresoDto, ingreso);
    return res.status(200).send({
      payload: ingreso,
    });
  }
  async create(req, res) {
    const { body } = req.params;
    let created = await this._service.create(body);

    const ingresoCosto = mapper(IngresoDto, created);
    return res.status(201).send({
      payload: ingresoCosto,
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
module.exports = IngresoController;
