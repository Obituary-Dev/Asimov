
var database = require('../models/database');

const userIndex =  (request, result, next) => {
   var message = '';
   result.render('index',{message: message});
 }; 

const userLogIn  = (request, result, next) => {
   var message = '';
   var sess = request.session; 

   if(request.method == "POST"){
      var post  = request.body;
      var name= post.user_name;
      var pass= post.password;
     
      var sql="SELECT U_Id, U_Firstname, U_Lastname, U_Username FROM `user` WHERE `U_Username`='"+name+"' and U_Password = '"+pass+"'";                           
      database.query(sql, function(err, results){      
         if(results.length){
            request.session.userId = results[0].U_Id;
            request.session.user = results[0];
            console.log('test ' + results[0].U_Id);
            console.log(results[0]);
            
            result.redirect('/dashboard');
         }
         else{
            message = 'Wrong Credentials.';
            result.render('index.ejs',{message: message});
         }
      });
   } else {
      console.log(request.method);
      result.render('index.ejs',{message: message});
   } 
};
           
const userDashboard = (req, res, next) => {
           
   var user =  req.session.user,
   userId = req.session.userId;
   console.log('user id = '+userId);
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM `user` WHERE `U_Id`='"+userId+"'";

   database.query(sql, function(err, results){
      res.render('./dashboard/dashboard.ejs', {user:user});    
   });       
};

const userLogOut = (req,res) => {
   req.session.destroy((err) => {
      res.redirect("/login");
   })
};

const userProfile = (req, res) => {

   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM `user` WHERE `U_Id`='"+userId+"'";          
   database.query(sql, function(err, result){  
      res.render('./profile/userProfile.ejs',{data:result});
   });
};

const userEditProfile=function(req,res){
   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/login");
      return;
   }

   var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";
   db.query(sql, function(err, results){
      res.render('edit_profile.ejs',{data:results});
   });
};

module.exports = {
   userIndex,
   userLogIn,
   userDashboard,
   userLogOut,
   userProfile,
   userEditProfile
}