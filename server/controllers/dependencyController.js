const request = require('request');
const npmUrl = 'http://registry.npmjs.org/';

module.exports.getByPackageName = async function(req, res) {
    request.get(`${npmUrl}${req.params.package}`, { json: true }, (err, res, body) => {
        if (err) {
            return console.log(err);
        }


        body.data.map(dep => {
            console.log(`${dep}`);
        });
    });
}
