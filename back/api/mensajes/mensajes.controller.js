/**
 * GET      /api/mensajes/:chat
 * POST     /api/mensajes/:chat
 */

module.exports.getMessage = getMessage;
module.exports.setMessage = setMessage;

function getMessage(req, res) {
    console.log('getMessage')
}

function setMessage(req, res) {
    console.log('setMessage')
}