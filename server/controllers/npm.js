const ls = require('npm-remote-ls').ls;

module.exports.getByPackageName = async function(req, res) {
    try {
        ls(req.params.package, 'latest', function(obj) {
            console.log(obj);
            res.status(200).json(obj);

        })

       /* const categories = await Category.findbyId({user: req.params.id});*/
    } catch(e) {
        // TODO implement errorHandler
        // errorHandler(res, e);
        console.log('something wrong',e)
    }
}
