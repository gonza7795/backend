
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'ec2-52-200-215-149.compute-1.amazonaws.com',
  user: 'plzyciozmheguj',
  password: '58341bfca76482b8fdb07d356d230bc0e0e15c3a4ad3b3f6acd9e82343cbdf4b',
  database: 'de2rru5oljddeh',
 port: '5432'
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