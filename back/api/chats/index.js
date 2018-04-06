const router = require('express').Router();
const controller = require('./chats.controller');

router.get('/:id', controller.getChat)

/** Get chat by query params, uusuarios */

/**Crear un chat  POST con los ids de los participantes*/

module.exports = router