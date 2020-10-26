const mapper = require("automapper-js");

class IngresoHostalController {
  constructor({ IngresoHostalService }) {
    this._service = IngresoHostalService;
  }

  async upload(req, res) {
    if (!req.file) {
      console.log("No file received");
      return res.send({
        success: false,
      });
    } else {
      console.log("file received successfully");

      setTimeout(() => {
        return res.status(200).send(req.file.filename);
      }, 2000);
    }
  }

  async createIngresoWithRespaldo(req, res) {
    const { body } = req;
    const created = await this._service.createWithRespaldos(body);
    // const egreso = mapper(EgresoHostalDto, created);

    return res.status(201).send({
      payload: created,
    });
  }
  async getIngresos(req, res) {
    let ingresos = await this._service.getAllWithJoin();
    //ingresos = ingresos.map((usuario) => mapper(UsuarioDto, usuario));
    return res.status(200).send(ingresos);
  }
  async getIngreso(req, res) {
    const { id } = req.params;
    let ingreso = await this._service.getOneWithJoin(id);
    return res.send(ingreso);
  }
}

module.exports = IngresoHostalController;
