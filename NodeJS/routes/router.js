// Creation of an express js router for this module 
const express = require('express');
const Mark = require('../models/Mark');
const marksController = require('../controllers/marksController')
const usersController = require('../controllers/usersController')
const studentsController = require('../controllers/studentsController')
const teachersController = require('../controllers/teachersController')


const router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', usersController.userIndex);
router.get('/student', studentsController.studentIndex);
router.get('/teacher', teachersController.teacherIndex);
// SEPARATION LOGIN STUDENT AND LOGIN TEACHER
router.post('/login/student', studentsController.studentLogIn);
router.get('/dashboard/student', studentsController.studentDashboard);
router.get('/profile/student', studentsController.studentProfile);
router.get('/marks/student', studentsController.studentMarksDisplayById);
router.post('/mark/student/discipline', studentsController.studentMarksDisplayByDiscipline);

router.post('/login/teacher', teachersController.teacherLogIn);
router.get('/dashboard/teacher', teachersController.teacherDashboard);
router.get('/profile/teacher', teachersController.teacherProfile);

router.get('/logout', usersController.userLogOut);
router.get('/marks', marksController.marksDisplay);
router.post('/mark/add', urlencodedParser, marksController.markAdd);
router.get('/mark/delete/:id', marksController.markDelete);
router.get('/mark/edit/:id', marksController.markFormEdit);
router.post('/mark/edit/:id', marksController.markEdit);
module.exports = router;