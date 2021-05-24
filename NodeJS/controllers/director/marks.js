var database = require('../../models/database');

// gives a list of data gotten from db to ejs file where it will be handled and shown in an html table
const marksDisplay = (request, result, next) => {
    var sql='SELECT * FROM `mark`, `teacher`, `discipline`, `assignationteacher_discipline`, `student`, `promotion` WHERE Mark_Id_Discipline = Assign_Dis_Id AND T_Id = Assign_T_Id AND Dis_Id = Mark_Id_Discipline AND Stu_Id = Mark_Id_Student AND Promo_Id = Mark_Id_Promotion GROUP BY Mark_Id ORDER BY Mark_Id_Student ASC, Mark_Id_Discipline';
    database.query(sql, function (err, data, fields) {
        if (err) throw err;
        result.render('./director/marksDisplay.ejs', { title: 'Marks', marksData: data});
      });
};

// called when edit button is clicked in ejs file, displays an update form 
const markFormEdit = (request, result, next) => {
    var id = request.params.id;
    var sql=`SELECT * FROM mark WHERE Mark_Id = ?`;
    database.query(sql, [id], function (err, data) {
      if (err) throw err;
      result.render('./director/markModify.ejs', { title: 'Modify mark', editData: data[0]});
    });
};
// called by submit button in update form, sends the update query to db
const markEdit = (request, result, next) => {
    var id = request.params.id;
    var updateData = request.body;
    var sql = `UPDATE mark SET ? WHERE Mark_Id= ?`;
    database.query(sql, [updateData, id], function (err, data) {
    if (err) throw err;
        console.log(data.affectedRows + " record(s) updated");
    });
    result.redirect('/marks/director');
};

// deletes 
const markDelete =  (request, result, next) => {
    var id = request.params.id;
    var sql = 'DELETE FROM mark WHERE Mark_Id = ?';
    database.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) updated");
  });
  result.redirect('/marks/director');
};

// exports it so the router can access it
module.exports = {
    marksDisplay,
    markFormEdit,
    markEdit,
    markDelete
}