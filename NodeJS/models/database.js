
// db connection
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'asimov',
  multipleStatements: true
}); 
connection.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

module.exports = connection;