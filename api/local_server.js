const express = require('express');
const bodyParser = require('body-parser');

class Server {
	constructor({ config, router }) {
		this._config = config;

		this._express = express();
		this._express.use(router);

		/* this._express.set(
      https.createServer({ key: key, cert: cert }, this._express)
    ); */
	}

	start() {
		return new Promise((resolve, reject) => {
			const http = this._express.listen(this._config.PORT, () => {
				const { port } = http.address();
				console.log('Aplicacion corriendo en en red local puerto:  ' + port);
				resolve();
			});
		});
	}
}

module.exports = Server;
