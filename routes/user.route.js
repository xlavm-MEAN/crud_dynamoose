const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js');

router.get('/', userController.findall);
router.get('/:id', userController.find);
router.post('/', userController.save);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;
