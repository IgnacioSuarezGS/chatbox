const usuariosModel = require('./usuarios.model');

/**
 * GET      /api/usuarios
 * GET      /api/usuarios/:id
 * POST     /api/usuarios
 * PATCH    /api/usuarios/:id
 */

module.exports.getAllUsers = getAllUsers;
module.exports.createNewUSer = createNewUSer;
module.exports.modifyUser = modifyUser;
module.exports.getUser = getUser;

function getAllUsers(req, res) {
    console.log('getAllUsers')
    usuariosModel.find()
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            res.json(err)
        })
}

function createNewUSer(req, res) {
    console.log('createNewUSer')
    const newUser = req.body;
    usuariosModel.create(newUser)
        .then(response => {
            return res.json(response);
        })
        .catch(err => {
            return res.json(err)
        })
}

function modifyUser(req, res) {
    console.log('modifyUser');
}

function getUser(req, res) {
    console.log('getUser');
    const userToFind = {
        id: req.params.id
    }
    usuariosModel.find({ _id: userToFind.id }, (err, response) => {
        return res.json(response)
    })
}