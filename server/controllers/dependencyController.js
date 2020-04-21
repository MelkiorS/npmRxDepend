const axios = require('axios');
const npmUrl = 'https://registry.npmjs.org/';

module.exports.getByPackageName = async function (serverReq, serverResp) {
   axios.get(npmUrl + serverReq.params.package)
        .then(resp => {
            const lastVersion = Object.keys(resp.data.versions).pop();
            const dependenciesObj  = resp.data.versions[lastVersion].dependencies;
            serverResp.status(200).json(dependenciesObj);
        }).catch(serverResp.status(500));
}
