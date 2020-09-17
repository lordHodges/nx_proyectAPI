const mapper = require("automapper-js");
const { SucursalDto } = require("../../dtos");

class SucursalController {
  constructor({ SucursalService }) {
    this._sucursalService = SucursalService;
  }
  async getSucursales(req, res) {
    let sucursales = await this._sucursalService.getAll();
    sucursales = sucursales.map((sucursal) => mapper(SucursalDto, sucursal));
    return res.send(sucursales);
  }

  async getSucursal(req, res) {
    const { id } = req.params;
    let sucursal = await this._sucursalService.get(id);
    if (!sucursal) {
      return res.status(404).send();
    }
    sucursal = mapper(SucursalDto, sucursal);
    return res.send({
      payload: sucursal,
    });
  }

  async createSucursal(req, res) {
    const { body } = req;
    const createdSucursal = await this._sucursalService.create(body);
    const sucursal = mapper(SucursalDto, createdSucursal);
    return res.status(201).send({
      payload: sucursal,
    });
  }

  async updateSucursal(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._sucursalService.update(id, body);
    return res.status(204).send();
  }

  async deleteSucursal(req, res) {
    const { id } = req.params;

    await this._sucursalService.delete(id);
    return res.status(204).send();
  }
}

module.exports = SucursalController;
