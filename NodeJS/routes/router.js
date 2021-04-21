// Creation of an express js router for this module 
const express = require('express');
const Mark = require('../models/Mark');
const marksController = require('../controllers/marksController')
const usersController = require('../controllers/usersController')

const router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/login', usersController.userIndex);
router.post('/login', usersController.userLogIn);
router.get('/dashboard', usersController.userDashboard);
router.get('/profile', usersController.userProfile);
router.get('/logout', usersController.userLogOut);
router.get('/marks', marksController.marksDisplay);
router.post('/mark/add', urlencodedParser, marksController.markAdd);
router.get('/mark/delete/:id', marksController.markDelete);
router.get('/mark/edit/:id', marksController.markFormEdit);
router.post('/mark/edit/:id', marksController.markEdit);
module.exports = router;