var database = require('../../models/database');

// displays all teachers from db to ejs
const teachersDisplay = (request, result, next) => {
    var sql='SELECT * FROM `roles`, `teacher` WHERE Role_Id = T_Id_Role';
    database.query(sql, function (err, data, fields) {
        if (err) throw err;
        console.log(data);
        result.render('./director/teachers.ejs', { title: 'Teachers', teachersData: data});
      });
};

// inserts a new teacher to the db from ejs
const teacherAdd = (request, result, next) => {

    const teacherToAdd = [request.body.T_Firstname, request.body.T_Lastname, request.body.T_Username, request.body.T_Password, request.body.T_Id_Role]
    var sql = 'INSERT INTO teacher(T_Firstname, T_Lastname, T_Username, T_Password, T_Id_Role) VALUES (?)';
    database.query(sql, [teacherToAdd], function (err, data) { 
        if (err) throw err;
        console.log("data is inserted successfully "); 
    });
   result.redirect('/teachers/director'); 
}; 

// exports it so the router can access it
module.exports = {
    teachersDisplay,
    teacherAdd
}