const { EgresoGastoDto } = require("../../dtos");
const mapper = require("automapper-js");
class EgresoGastoController {
  constructor({ EgresoGastoService }) {
    this._service = EgresoGastoService;
  }

  async getAll(req, res) {
    let egresosGastos = await this._service.getAll();
    egresosGastos = egresosGastos.map((e) => mapper(EgresoGastoDto, e));
    return res.status(200).send(egresosGastos);
  }
  async get(req, res) {
    const { id } = req.params;
    let egreso = await this._service.get(id);
    if (!egreso) {
      return res.status(404).send();
    }
    egreso = mapper(EgresoGastoDto, egreso);
    return res.status(200).send({
      payload: egreso,
    });
  }
  async create(req, res) {
    const { body } = req.params;
    let created = await this._service.create(body);

    const egresoGasto = mapper(EgresoGastoDto, created);
    return res.status(201).send({
      payload: egresoGasto,
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
module.exports = EgresoGastoController;
