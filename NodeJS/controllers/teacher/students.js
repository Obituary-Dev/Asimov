var database = require('../../models/database');

const studentsDisplay = (request, result, next) => {
    var sql='SELECT * FROM student';
    database.query(sql, function (err, data, fields) {
        if (err) throw err;
        result.render('./teacher/studentsDisplay.ejs', { title: 'Students', studentsData: data});
      });
};

module.exports = {
  studentsDisplay
}