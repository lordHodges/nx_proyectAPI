class StartUp {
	constructor({ server, localServer, config }) {
		this._config = config;
		this._server = server;
		this._localServer = localServer;
	}

	async start() {
		if (this._config.LOCAL === "true") {
			await this._localServer.start();
		} else {
			await this._server.start();
		}
	}
}

module.exports = StartUp;
