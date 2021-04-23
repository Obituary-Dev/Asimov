const { request } = require('express');
var Mark = require('../models/Mark');
var database = require('../models/database');

const marksDisplay = (request, result, next) => {
    var sql='SELECT * FROM mark';
    database.query(sql, function (err, data, fields) {
        if (err) throw err;
        result.render('./teacher/teacherMarksDisplay.ejs', { title: 'Marks', marksData: data});
      });
};

const markAdd = (request, result, next) => {

    const markToAdd = [request.body.Mark_Value, request.body.Mark_Id_Discipline]
    //const newMark = new Mark();
    // insert user data into users table
    var sql = 'INSERT INTO mark(Mark_Value, Mark_Id_Discipline) VALUES (?);';
    database.query(sql, [markToAdd], function (err, data) { 
        if (err) throw err;
           console.log("data is inserted successfully "); 
    });
   result.redirect('/marks');  // redirect to user form page after inserting the data
  }; 

const markDelete =  (request, result, next) => {
    var id = request.params.id;
    var sql = 'DELETE FROM mark WHERE Mark_Id = ?';
    database.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) updated");
  });
  result.redirect('/marks');
};

const markFormEdit = (request, result, next) => {
    var id = request.params.id;
    var sql=`SELECT * FROM mark WHERE Mark_Id = ?`;
    database.query(sql, [id], function (err, data) {
      if (err) throw err;
      result.render('./marks/markModify.ejs', { title: 'Modify mark', editData: data[0]});
    });
};

const markEdit = (request, result, next) => {
    var id = request.params.id;
    var updateData = request.body;
    var sql = `UPDATE mark SET ? WHERE Mark_Id= ?`;
    database.query(sql, [updateData, id], function (err, data) {
    if (err) throw err;
        console.log(data.affectedRows + " record(s) updated");
    });
    result.redirect('/marks');
};

module.exports = {
    marksDisplay,
    markAdd,
    markDelete,
    markFormEdit,
    markEdit
}