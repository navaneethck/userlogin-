const express = require('express');
const router =express.Router();
const {signup}= require('../controllers/userSignup');
const {userLogin}= require('../controllers/userLogin');

router.post('/signup',signup)
router.post('/login',userLogin)

module.exports= router