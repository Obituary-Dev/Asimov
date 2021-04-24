// Creation of an express js router for this module 
const express = require('express');
const Mark = require('../models/Mark');

//--------------------- CONTROLLER DECLARATION --------------------------------------

// User controllers
const u_usersController = require('../controllers/users');
// Director controllers
const d_disciplinesController = require('../controllers/director/disciplines');
const d_marksController = require('../controllers/director/marks');
const d_teachersController = require('../controllers/director/teachers');

// Teacher+ controllers
const t_plus_classesController = require('../controllers/teacher_plus/classes');
const t_plus_studentsController = require('../controllers/teacher_plus/students');

// Teacher controllers
const t_generalController = require('../controllers/teacher/general');
const t_marksController = require('../controllers/teacher/marks');
const t_studentsController = require('../controllers/teacher/students');

// Student controllers
const s_generalController = require('../controllers/student/general');

/**
 * ELEVE
 * - voir son profil [x]
 * - A FAIRE voir son EDT
 * - voir ses notes [x]
 * - trier ses notes par matière [x]
 * - A FAIRE voir un graphique de ses notes 
 * 
 * PROF
 * - voir les notes de ses étudiants 
 * - ajouter des notes à ses étudiants 
 * + ajouter des notes à ses étudiants dans ses matières
 * 
 * PROF SPE = PROF +
 * - creer des élèves et leur affilier une classe
 * 
 * PROVISEUR
 * - modifier les notes de toutes les matières
 * - créer des matières
 * - créer des professeurs
 */


const router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// User routes
router.get('/', u_usersController.userIndex);
router.get('/logout', u_usersController.userLogOut);

// Director routes

// Teacher+ routes

// Teacher routes
router.get('/teacher', t_generalController.teacherIndex);
router.post('/login/teacher', t_generalController.teacherLogIn);
router.get('/dashboard/teacher', t_generalController.teacherDashboard);
router.get('/profile/teacher', t_generalController.teacherProfile);
router.get('/marks/teacher', t_marksController.marksDisplay);
router.post('/mark/teacher/add', urlencodedParser, t_marksController.markAdd);
router.get('/mark/teacher/delete/:id', t_marksController.markDelete);
router.get('/students/teacher', t_studentsController.studentsDisplay);

// Student routes
router.get('/student', s_generalController.studentIndex);
router.post('/login/student', s_generalController.studentLogIn);
router.get('/dashboard/student', s_generalController.studentDashboard);
router.get('/profile/student', s_generalController.studentProfile);
router.get('/marks/student', s_generalController.studentMarksDisplayById);
router.post('/mark/student/discipline', s_generalController.studentMarksDisplayByDiscipline);


//router.get('/marks/teacher', marksController.marksDisplay);
//router.post('/mark/add', urlencodedParser, marksController.markAdd);
//router.get('/mark/delete/:id', marksController.markDelete);
//router.get('/mark/edit/:id', marksController.markFormEdit);
//router.post('/mark/edit/:id', marksController.markEdit);
module.exports = router;