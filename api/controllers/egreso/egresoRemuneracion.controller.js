const { EgresoRemuneracionDto } = require("../../dtos");
const mapper = require("automapper-js");
class EgresoRemuneracionController {
  constructor({ EgresoRemuneracionService }) {
    this._service = EgresoRemuneracionService;
  }

  async getAll(req, res) {
    let egresosRemuneracions = await this._service.getAll();
    egresosRemuneracions = egresosRemuneracions.map((e) =>
      mapper(EgresoRemuneracionDto, e)
    );
    return res.status(200).send(egresosRemuneracions);
  }
  async get(req, res) {
    const { id } = req.params;
    let egreso = await this._service.get(id);
    if (!egreso) {
      return res.status(404).send();
    }
    egreso = mapper(EgresoRemuneracionDto, egreso);
    return res.status(200).send({
      payload: egreso,
    });
  }
  async create(req, res) {
    const { body } = req.params;
    let created = await this._service.create(body);

    const egresoRemuneracion = mapper(EgresoRemuneracionDto, created);
    return res.status(201).send({
      payload: egresoRemuneracion,
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
module.exports = EgresoRemuneracionController;
