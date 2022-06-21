var mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'giphy_app'
}

module.exports = {
    connection: mysql.createConnection(config)
}
