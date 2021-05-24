var database = require('../../models/database');

// gives a list of data gotten from db to ejs file where it will be handled and shown in an html table
const disciplinesDisplay = (request, result, next) => {
    var sql='SELECT * FROM `discipline`';
    database.query(sql, function (err, data, fields) {
        if (err) throw err;
        result.render('./director/disciplines.ejs', { title: 'Disciplines', disData: data});
      });
};
// is called when submit button is clicked in ejs file, inserts data from ejs in db
const disciplineAdd = (request, result, next) => {

    const disToAdd = [request.body.Dis_Name]
    var sql = 'INSERT INTO discipline(Dis_Name) VALUES (?)';
    database.query(sql, [disToAdd], function (err, data) { 
        if (err) throw err;
        console.log("data is inserted successfully "); 
    });
   result.redirect('/disciplines/director');  
}; 

// exports it so the router can access it
module.exports = {
    disciplinesDisplay,
    disciplineAdd
}