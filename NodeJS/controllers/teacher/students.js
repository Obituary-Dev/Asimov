var database = require('../../models/database');

// gives a list of data gotten from db to ejs file where it will be handled and shown in an html table
const studentsDisplay = (request, result, next) => {
  var role = request.session.role;
  
  var sql='SELECT * FROM student, promotion WHERE Stu_Id_Promotion = Promo_Id GROUP BY Stu_Id';
  database.query(sql, function (err, data, fields) {
      if (err) throw err;
      if(role == 2){
      result.render('./teacher/studentsDisplay.ejs', {studentsData: data});}
      else if(role == 3){
      result.render('./teacher_plus/studentsAdd.ejs', {studentsData: data});
      console.log(data);
      }
      else if(role == 4){
        result.render();
      }
      else {
        result.redirect("/");
      }
    });
};

// adds a student from ejs to db 
const studentAdd = (request, result, next) => {

  const studentToAdd = [request.body.Stu_Firstname, request.body.Stu_Lastname, request.body.Stu_Username, request.body.Stu_Password, request.body.Stu_Id_Promotion]
  var sql = 'INSERT INTO student(Stu_Firstname, Stu_Lastname, Stu_Username, Stu_Password, Stu_Id_Promotion) VALUES (?)';
  database.query(sql, [studentToAdd], function (err, data) { 
      if (err) throw err;
      console.log("data is inserted successfully "); 
  });
 result.redirect('/students/teacher');  
}; 

// exports it so the router can access it
module.exports = {
  studentsDisplay,
  studentAdd
}