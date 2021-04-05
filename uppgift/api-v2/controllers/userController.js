const router = require('express').Router();
const userModel = require('../models/users/userModel');

router.get('/', userModel.getUsers);
router.get('/:id', userModel.getOneUser);

router.post('/register', userModel.registerUser);
router.post('/login', userModel.loginUser);


module.exports = router;