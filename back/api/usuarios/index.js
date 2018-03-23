const router = require('express').Router();
const controller = require('./usuarios.controller');

router.get('/', controller.getAllUsers)

router.get('/:id', controller.getUser);

router.post('/', controller.createNewUSer);

router.patch('/:id', controller.modifyUser);

module.exports = router