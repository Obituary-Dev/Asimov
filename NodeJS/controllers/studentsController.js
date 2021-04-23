var database = require('../models/database');

const studentIndex =  (request, result, next) => {
    var message = '';
    result.render('./connect/connectStudent',{message: message});
};
 
const studentLogIn  = (request, result, next) => {
    var message = '';
    var sess = request.session; 
 
    if(request.method == "POST"){
       var post  = request.body;
       var name= post.user_name;
       var pass= post.password;
      
       var sql="SELECT Stu_Id, Stu_Firstname, Stu_Lastname, Stu_Username FROM `student` WHERE `Stu_Username`='"+name+"' and Stu_Password = '"+pass+"'";                           
       database.query(sql, function(err, results){      
          if(results.length){
             request.session.userId = results[0].Stu_Id;
             request.session.user = results[0];
             console.log('test ' + results[0].Stu_Id);
             console.log(results[0]);
             
             result.redirect('/dashboard/student');
          }
          else{
             message = 'Wrong Credentials.';
             result.render('./connect/connectHeader.ejs',{message: message});
          }
       });
    } else {
       result.render('./connect/connectHeader.ejs',{message: message});
    } 
};
const studentDashboard = (req, res, next) => {
           
    var user =  req.session.user,
    userId = req.session.userId;
    if(userId == null){
       res.redirect("/");
       return;
    }
 
    var sql="SELECT * FROM `student` WHERE `Stu_Id`='"+userId+"'";
 
    database.query(sql, function(err, results){
       res.render('./student/studentDashboard.ejs', {user:user});    
    });       
};
      
const studentProfile = (req, res) => {

    var userId = req.session.userId;
    if(userId == null){
       res.redirect("/");
       return;
    }
 
    var sql="SELECT * FROM `student` WHERE `Stu_Id`='"+userId+"'";          
    database.query(sql, function(err, result){  
       res.render('./student/studentProfile.ejs',{data:result});
    });
};

const studentMarksDisplayById = (request, result, next) => {
   
   var userId = request.session.userId;
   if(userId == null){
      result.redirect("/");
      return;
   }
   var sql="SELECT * FROM `mark` WHERE `Mark_Id_Student`='"+userId+"'";
   var sql2="SELECT * FROM discipline";
   database.query(sql, sql2, function (err, data, data2, fields) {
      if (err) throw err;
      result.render('./student/studentMarksDisplay.ejs', { title: 'Marks', test: 'test', marksData: data, disData: data2});
   });
};

const studentMarksDisplayByDiscipline = (request, result, next) => {
   
   var userId = request.session.userId;
   var markIdDiscipline = request.body.Mark_Id_Discipline;
   if(userId == null){
      result.redirect("/");
      return;
   }
   var sql="SELECT * FROM `mark` WHERE `Mark_Id_Student`='"+userId+"' AND `Mark_Id_Discipline`='"+markIdDiscipline+"'";
   database.query(sql, function (err, data, fields) {
      if (err) throw err;
      result.render('./student/studentMarksDisplay.ejs', { title: 'Marks', marksData: data});
   });
};


module.exports = {
    studentIndex,
    studentLogIn,
    studentProfile,
    studentDashboard,
    studentMarksDisplayById,
    studentMarksDisplayByDiscipline
}