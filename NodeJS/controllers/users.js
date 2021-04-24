
var database = require('../models/database');

const userIndex =  (request, result, next) => {
   var message = '';
   result.render('./connect/header.ejs',{message: message});
}; 

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

module.exports = {
   userIndex,
   userLogOut,
   userEditProfile
}