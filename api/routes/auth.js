const express = require('express');
const router = express.Router();
const {
  postLoginController,
  postRegisterController,
} = require('../controllers/authControllers');

//register user
router.post('/register', postRegisterController);
//login admin
router.post('/login', postLoginController);

module.exports = router;
