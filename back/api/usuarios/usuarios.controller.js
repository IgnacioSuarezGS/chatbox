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
}

function createNewUSer(req, res) {
    console.log('createNewUSer')
}

function modifyUser(req, res) {
    console.log('modifyUser')
}

function getUser(req, res) {
    console.log('getUser')
}