
class CostoLubricentroController {
    constructor({ CostoLubricentroService }) {
        this._service = CostoLubricentroService;
    }

    async upload(req, res){
        if (!req.file) {
            console.log("El archivo no fue recibido con éxito");
            return res.send({
                success: false,
            });
        } else {
            console.log("Archivo recibido con éxito");
            setTimeout(() => {
                return res.status(200).send(req.file.filename);
            }, 2000);
        }
    }

    async createCostoWithRespaldo(req, res){
        const { body } = req;
        const created = await this._service.createWithRespaldos(body);
        return res.status(201).send({
            payload: created,
        });
    }

    async getCostos(req, res) {
        let costos = await this._service.getAllWithJoin();
        return res.status(200),send(costos);
    }

    async getCosto(req, res) {
        const {id} = req.params;
        let costo = await this._service.getOneWithJoin(id);
        return res.send(costo);
    }
}

module.exports = CostoLubricentroController;