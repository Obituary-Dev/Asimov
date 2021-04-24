const { request } = require('express');
var database = require('./../../models/database');

/*
SELECT * 
FROM `mark`, `teacher`, `discipline`, `assignationteacher_discipline`, `student`, `promotion` 
WHERE Mark_Id_Discipline = Assign_Dis_Id 
AND T_Id = Assign_T_Id 
AND Dis_Id = Mark_Id_Discipline 
AND Stu_Id = Mark_Id_Student
AND Promo_Id = Mark_Id_Promotion
GROUP BY Mark_Id 
ORDER BY Mark_Id_Discipline

*/
const marksDisplay = (request, result, next) => {
    var sql='SELECT * FROM `mark`, `teacher`, `discipline`, `assignationteacher_discipline`, `student`, `promotion` WHERE Mark_Id_Discipline = Assign_Dis_Id AND T_Id = Assign_T_Id AND Dis_Id = Mark_Id_Discipline AND Stu_Id = Mark_Id_Student AND Promo_Id = Mark_Id_Promotion GROUP BY Mark_Id ORDER BY Mark_Id_Student ASC, Mark_Id_Discipline';
    database.query(sql, function (err, data, fields) {
        if (err) throw err;
        console.log(data);
        result.render('./teacher/marksDisplay.ejs', { title: 'Marks', marksData: data});
      });
};

const markAdd = (request, result, next) => {

    const markToAdd = [request.body.Mark_Value, request.body.Mark_Id_Discipline, request.body.Mark_Id_Student, request.body.Mark_Id_Promotion]
    //const newMark = new Mark();
    // insert user data into users table
    var sql = 'INSERT INTO mark(Mark_Value, Mark_Id_Discipline, Mark_Id_Student, Mark_Id_Promotion) VALUES (?)';
    database.query(sql, [markToAdd], function (err, data) { 
        if (err) throw err;
        console.log("data is inserted successfully "); 
    });
   result.redirect('/marks/teacher');  // redirect to user form page after inserting the data
}; 

const markDelete =  (request, result, next) => {
    var id = request.params.id;
    var sql = 'DELETE FROM mark WHERE Mark_Id = ?';
    database.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) updated");
  });
  result.redirect('/marks/teacher');
};


module.exports = {
    marksDisplay,
    markAdd,
    markDelete,
}