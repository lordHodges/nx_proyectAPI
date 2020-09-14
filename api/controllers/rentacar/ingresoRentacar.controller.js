const mapper = require("automapper-js");
const { IngresoRentacarDto } = require("../../dtos");

class IngresoRentacarController {
  constructor({ IngresoRentacarService }) {
    this._ingresoRentacarService = IngresoRentacarService;
  }
  async getIngresos(req, res) {
    let ingresos = await this._ingresoRentacarService.getAll();
    ingresos = ingresos.map((ingreso) => mapper(IngresoRentacarDto, ingreso));
    return res.status(201).send(ingresos);
  }
  async getIngreso(req, res) {
    const { id } = req.params;
    let ingreso = await this._ingresoRentacarService.get(id);
    if (!ingreso) {
      return res.status(404).send({ message: "ingreso no existe" });
    }
    ingreso = mapper(IngresoRentacarDto, ingreso);
    return res.json({ ingreso });
  }
  async createIngreso(req, res) {
    const { body } = req;
    const createdIngreso = await this._ingresoRentacarService.create(body);
    if (!createdIngreso) {
      return res.status(503).send({
        message:
          "Tenemos porblemas para procesar tu consulta intenta nuevamente",
      });
    }
    return res.status(201).send(createdIngreso);
  }
  async updateIngreso(req, res) {
    const { body } = req;
    const { id } = req.params;

    const updated = await this._ingresoRentacarService.update(id, body);
    return res.status(201).send(updated);
  }
  async deleteIngreso(req, res) {
    const { id } = req.params;
    await this._ingresoRentacarService.delete(id);
    return res.status(204).send();
  }
}
module.exports = IngresoRentacarController;
