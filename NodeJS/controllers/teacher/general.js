var database = require('../../models/database');

// teacher connection section
const teacherIndex =  (request, result, next) => {
    var message = '';
    result.render('./connect/teacher',{message: message});
}; 

// allows teacher to connect if they put the right credentials according to db and redirects to their dashboard
const teacherLogIn  = (request, result, next) => {
    var message = '';
    var sess = request.session; 
 
    if(request.method == "POST"){
       var post  = request.body;
       var name= post.user_name;
       var pass= post.password;
      
       var sql="SELECT * FROM `teacher` WHERE `T_Username`='"+name+"' and T_Password = '"+pass+"'";                           
       database.query(sql, function(err, results){      
          if(results.length){
             request.session.role = results[0].T_Id_Role;
             request.session.userId = results[0].T_Id;
             request.session.user = results[0];
             console.log('test ' + results[0].T_Id);
             console.log(results[0]);
             
             result.redirect('/dashboard/teacher');
          }
          else{
             message = 'Wrong Credentials.';
             result.render('./connect/header.ejs',{message: message});
          }
       });
    } else {
       console.log(request.method);
       result.render('./connect/header.ejs',{message: message});
    } 
};

// shows profile with first/lastname and username 
const teacherProfile = (req, res) => {
    var role = req.session.role;
    var userId = req.session.userId;
    if(userId == null){
       res.redirect("/");
       return;
    }
 
    var sql="SELECT * FROM `teacher` WHERE `T_Id`='"+userId+"'";          
    database.query(sql, function(err, result){  
       if(role < 4){
         res.render('./teacher/profile',{data:result});
       }else if(role == 4){
         res.render('./director/profile',{data:result});

       }
    });
};

// shows teacher dashboard 
const teacherDashboard = (req, res, next) => {
           
    var role = req.session.role;
    var user =  req.session.user,
    userId = req.session.userId;
    console.log('user id = '+userId);
    if(userId == null){
       res.redirect("/");
       return;
    }
 
    var sql="SELECT * FROM `teacher` WHERE `T_Id`='"+userId+"'";
 
    database.query(sql, function(err, results){
       if(role < 4){
         res.render('./teacher/dashboard.ejs', {user:user});    
       }
       else if(role == 4){
         res.render('./director/dashboard.ejs', {user:user});    
       }
       else{
         res.redirect("/");
       }
    });       
};

// exports it so the router can access it
module.exports = {
    teacherIndex,
    teacherLogIn,
    teacherProfile,
    teacherDashboard
}