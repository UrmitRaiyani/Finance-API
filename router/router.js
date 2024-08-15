const express  = require("express");

const router = express.Router();

const controller = require('../controller/controller');

router.get('/',controller.home);
router.post('/createUser', controller.createUser);
router.delete('/deleteUser/:id', controller.deleteUser);
router.put('/updateUser/:id', controller.updateUser);

module.exports = router;