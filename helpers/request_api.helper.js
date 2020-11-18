const request = require("request");
const fs = require("fs");

const cert = fs.readFileSync("fullchain4.pem");
const key = fs.readFileSync("privkey4.pem");
class RequestApiHelper {
	make_API_call(url) {
		return new Promise((resolve, reject) => {
			request(
				url,
				{ json: true, ca: cert, key: key, strictSSL: true },
				(err, res, body) => {
					if (err) reject(err);
					resolve(body);
				}
			);
		});
	}
}
module.exports = RequestApiHelper;
