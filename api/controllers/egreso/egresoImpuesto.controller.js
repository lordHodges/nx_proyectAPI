const { EgresoImpuestoDto } = require("../../dtos");
const mapper = require("automapper-js");
class EgresoImpuestoController {
  constructor({ EgresoImpuestoService }) {
    this._service = EgresoImpuestoService;
  }

  async getAll(req, res) {
    let egresosImpuestos = await this._service.getAll();
    egresosImpuestos = egresosImpuestos.map((e) =>
      mapper(EgresoImpuestoDto, e)
    );
    return res.status(200).send(egresosImpuestos);
  }
  async get(req, res) {
    const { id } = req.params;
    let egreso = await this._service.get(id);
    if (!egreso) {
      return res.status(404).send();
    }
    egreso = mapper(EgresoImpuestoDto, egreso);
    return res.status(200).send({
      payload: egreso,
    });
  }
  async create(req, res) {
    const { body } = req.params;
    let created = await this._service.create(body);

    const egresoImpuesto = mapper(EgresoImpuestoDto, created);
    return res.status(201).send({
      payload: egresoImpuesto,
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
module.exports = EgresoImpuestoController;
