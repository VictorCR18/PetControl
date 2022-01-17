const mysql = require('mysql2');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ciroappdb',
    port: 3306
});

db.connect(err => {
    if (err) {
        console.log(err, 'dberr');
    } else {
        console.log('database conncted...');
    }
})

module.exports = db