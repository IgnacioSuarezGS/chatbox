const router = require('express').Router();
const controller = require('./chats.controller');

router.get('/:id', controller.getChat)

module.exports = router