var mysql = require('mysql');

var connMySQL = () => {
    console.log('database connected');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '******',
        database: '******',
    });
}

module.exports = () => {
    return connMySQL;
};
