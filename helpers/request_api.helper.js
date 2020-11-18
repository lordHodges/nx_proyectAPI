const request = require("request");
const fs = require("fs");

const cert = fs.readFileSync("fullchain4.pem");
const key = fs.readFileSync("privkey4.pem");
const usertoken =
	"9580af34ca299aa979a151280f6ef856bdee8b4dc9c17641d15df2cf54a5c7c876d369bc1b66715fa483c100755014f4";
const headers = { usertoken: usertoken };
class RequestApiHelper {
	make_API_call(url) {
		return new Promise((resolve, reject) => {
			request(
				url,
				{ json: true, ca: cert, key: key, strictSSL: false, headers: headers },
				(err, res, body) => {
					if (err) reject(err);
					resolve(body);
				}
			);
		});
	}
}
module.exports = RequestApiHelper;
