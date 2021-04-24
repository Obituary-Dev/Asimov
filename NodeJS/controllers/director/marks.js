var database = require('../../models/database');

const marksDisplay = (request, result, next) => {
    var sql='SELECT * FROM mark';
    database.query(sql, function (err, data, fields) {
        if (err) throw err;
        result.render('./director/marksDisplay.ejs', { title: 'Marks', marksData: data});
      });
};

const markFormEdit = (request, result, next) => {
    var id = request.params.id;
    var sql=`SELECT * FROM mark WHERE Mark_Id = ?`;
    database.query(sql, [id], function (err, data) {
      if (err) throw err;
      result.render('./director/markModify.ejs', { title: 'Modify mark', editData: data[0]});
    });
};

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

const markDelete =  (request, result, next) => {
    var id = request.params.id;
    var sql = 'DELETE FROM mark WHERE Mark_Id = ?';
    database.query(sql, [id], function (err, data) {
    if (err) throw err;
    console.log(data.affectedRows + " record(s) updated");
  });
  result.redirect('/marks/director');
};

module.exports = {
    marksDisplay,
    markFormEdit,
    markEdit,
    markDelete
}