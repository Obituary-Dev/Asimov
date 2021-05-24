
var database = require('../models/database');

// displays header only
const userIndex =  (request, result, next) => {
   var message = '';
   result.render('./connect/header.ejs',{message: message});
}; 

// ends session and shows header / cut connection 
const userLogOut = (req,res) => {
   req.session.destroy((err) => {
      res.redirect("/");
   })
};

const userEditProfile=function(req,res){
   var userId = req.session.userId;
   if(userId == null){
      res.redirect("/");
      return;
   }

   var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";
   db.query(sql, function(err, results){
      res.render('edit_profile.ejs',{data:results});
   });
};

// exports it so the router can access it
module.exports = {
   userIndex,
   userLogOut,
   userEditProfile
}