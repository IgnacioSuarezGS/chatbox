const router = require('express').Router();
const controller = require('./idiomas.controller');

router.get('/', controller.getAllLanguages)

module.exports = router