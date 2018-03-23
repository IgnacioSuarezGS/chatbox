const router = require('express').Router();
const controller = require('./mensajes.controller');


router.get('/:chat', controller.getMessage)

router.post('/:chat', controller.setMessage);


module.exports = router