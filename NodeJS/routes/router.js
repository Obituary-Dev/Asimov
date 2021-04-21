// Creation of an express js router for this module 
const express = require('express');
const Mark = require('../models/Mark');
const marksController = require('../controllers/marksController')
const router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/marks', marksController.marksDisplay);
router.post('/mark/add', urlencodedParser, marksController.markAdd);
router.get('/mark/delete/:id', marksController.markDelete);
router.get('/mark/edit/:id', marksController.markFormEdit);
router.post('/mark/edit/:id', marksController.markEdit);

module.exports = router;