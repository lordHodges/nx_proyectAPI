const mapper = require("automapper-js");
const { IngresoHostalDto } = require("../../dtos");

class IngresoHostalController {
  constructor({ IngresoHostalService, config }) {
    this._ingresoService = IngresoHostalService;
    this._config = config;
  }

  async getIngresos(req, res) {
    let ingresos = await this._ingresoService.getAll();
    ingresos = ingresos.map((ingreso) => mapper(IngresoHostalDto, ingreso));
    return res.status(201).send(ingresos);
  }
  async getIngresosWithUsuario(req, res) {
    let ingresos = await this._ingresoService.getAllWithJoin();
    ingresos = ingresos.map((x) => mapper(IngresoHostalDto, x));
    return res.send(ingresos);
  }
  async getIngreso(req, res) {
    const { id } = req.params;
    let ingreso = await this._ingresoService.get(id);
    if (!ingreso) {
      return res.status(404).send();
    }
    ingreso = mapper(IngresoHostalDto, ingreso);
    return res.status(200).send({ payload: ingreso });
  }
  async createIngreso(req, res) {
    const { body } = req;
    const ingresoCreado = await this._ingresoService.create(body);

    const ingreso = mapper(IngresoHostalDto, ingresoCreado);
    return res.status(201).send({ payload: ingreso });
  }
  async updateIngreso(req, res) {
    const { body } = req;
    const { id } = req.params;
    await this._ingresoService.update(id, body);
    return res.status(204).send();
  }
  async deleteIngreso(req, res) {
    const { id } = req.params;
    await this._ingresoService.delete(id);
    return res.status(204).send();
  }
}
module.exports = IngresoHostalController;
