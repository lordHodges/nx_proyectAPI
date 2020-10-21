const mapper = require("automapper-js");

class EgresoHostalController {
  constructor({ EgresoHostalService }) {
    this._service = EgresoHostalService;
  }

  async createEgresoWithRespaldo(req, res) {
    const { body } = req;
    const created = await this._service.createWithRespaldos(body);
    // const egreso = mapper(EgresoHostalDto, created);

    return res.status(201).send({
      payload: created,
    });
  }
}

module.exports = EgresoHostalController;
