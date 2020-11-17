const { response } = require("express");
const request = require("request");

class RequestApiHelper {
	make_API_call(url) {
		/* request(url, { json: true }, (err, res, body) => {
			if (err) reject(err);
			return body;
		}); */
		return new Promise((resolve, reject) => {
			request(url, { json: true }, (err, res, body) => {
				if (err) reject(err);
				resolve(body);
			});
		});
	}
}
module.exports = RequestApiHelper;
