
var database = require('../models/database');

const teacherIndex =  (request, result, next) => {
    var message = '';
    result.render('./connect/teacher',{message: message});
}; 

const teacherLogIn  = (request, result, next) => {
    var message = '';
    var sess = request.session; 
 
    if(request.method == "POST"){
       var post  = request.body;
       var name= post.user_name;
       var pass= post.password;
      
       var sql="SELECT T_Id, T_Firstname, T_Lastname, T_Username FROM `teacher` WHERE `T_Username`='"+name+"' and T_Password = '"+pass+"'";                           
       database.query(sql, function(err, results){      
          if(results.length){
             request.session.userId = results[0].T_Id;
             request.session.user = results[0];
             console.log('test ' + results[0].T_Id);
             console.log(results[0]);
             
             result.redirect('/dashboard/teacher');
          }
          else{
             message = 'Wrong Credentials.';
             result.render('./connect/connectHeader.ejs',{message: message});
          }
       });
    } else {
       console.log(request.method);
       result.render('./connect/connectHeader.ejs',{message: message});
    } 
};

const teacherProfile = (req, res) => {

    var userId = req.session.userId;
    if(userId == null){
       res.redirect("/");
       return;
    }
 
    var sql="SELECT * FROM `teacher` WHERE `T_Id`='"+userId+"'";          
    database.query(sql, function(err, result){  
       res.render('./teacher/teacherProfile',{data:result});
    });
};

const teacherDashboard = (req, res, next) => {
           
    var user =  req.session.user,
    userId = req.session.userId;
    console.log('user id = '+userId);
    if(userId == null){
       res.redirect("/");
       return;
    }
 
    var sql="SELECT * FROM `teacher` WHERE `T_Id`='"+userId+"'";
 
    database.query(sql, function(err, results){
       res.render('./teacher/teacherDashboard.ejs', {user:user});    
    });       
};
module.exports = {
    teacherIndex,
    teacherLogIn,
    teacherProfile,
    teacherDashboard
}