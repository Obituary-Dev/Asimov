var database = require('../../models/database');

// shows connect page by default
const studentIndex =  (request, result, next) => {
    var message = '';
    result.render('./connect/student',{message: message});
};
// verifies the credentials using sql query and redirects to the dashboard if connection OK, else, resends to the log in page
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
             result.render('./connect/header.ejs',{message: message});
          }
       });
    } else {
       result.render('./connect/header.ejs',{message: message});
    } 
};

// says hello when connected
const studentDashboard = (req, res, next) => {
           
    var user =  req.session.user,
    userId = req.session.userId;
    if(userId == null){
       res.redirect("/");
       return;
    }
 
    var sql="SELECT * FROM `student` WHERE `Stu_Id`='"+userId+"'";
 
    database.query(sql, function(err, results){
       res.render('./student/dashboard.ejs', {user:user});    
    });       
};


// sends student data to ejs so it can display profile section properly
const studentProfile = (req, res) => {

    var userId = req.session.userId;
    if(userId == null){
       res.redirect("/");
       return;
    }
 
    var sql="SELECT * FROM `student` WHERE `Stu_Id`='"+userId+"'";          
    database.query(sql, function(err, result){  
       res.render('./student/profile.ejs',{data:result});
    });
};

// displays ejs file after sending the student grades sorted by the student id
const studentMarksDisplayById = (request, result, next) => {
   
   var userId = request.session.userId;
   if(userId == null){
      result.redirect("/");
      return;
   }
   var sql="SELECT * FROM `mark`, `discipline` WHERE `Dis_Id` = `Mark_Id_Discipline` AND `Mark_Id_Student`='"+userId+"' GROUP BY `Mark_Id` ORDER BY `Dis_Name`";
   database.query(sql, function (err, data, fields) {
      if (err) throw err;
      console.log(data);
      result.render('./student/marksDisplay.ejs', { title: 'Marks', test: 'test', marksData: data});
   });
};

// allows the student to choose which discipline grade they want to see
const studentMarksDisplayByDiscipline = (request, result, next) => {
   
   var userId = request.session.userId;
   var markIdDiscipline = request.body.Mark_Id_Discipline;
   if(userId == null){
      result.redirect("/");
      return;
   }
   var sql="SELECT * FROM `mark`, `discipline` WHERE `Dis_Id` = `Mark_Id_Discipline` AND `Mark_Id_Student`='"+userId+"' AND `Mark_Id_Discipline`='"+markIdDiscipline+"' GROUP BY `Dis_Name` ORDER BY `Dis_Name`";
   database.query(sql, function (err, data, fields) {
      if (err) throw err;
      result.render('./student/marksDisplay.ejs', { title: 'Marks', marksData: data});
   });
};

// exports it so the router can access it
module.exports = {
    studentIndex,
    studentLogIn,
    studentProfile,
    studentDashboard,
    studentMarksDisplayById,
    studentMarksDisplayByDiscipline
}