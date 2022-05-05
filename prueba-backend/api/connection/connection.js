
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'ferrari1947',
  database: 'prueba2'
 //port: '3306'
});

mysqlConnection.connect( err => {
  if(err){
    console.log('Error en db: ', err);
    return;
  }else{
    console.log('Db ok');
  }
});

module.exports = mysqlConnection;