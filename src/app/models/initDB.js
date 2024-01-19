import { connection } from './getConnection.js';

export function initDB() {
    console.log("initDB");
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255))";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Table users created");

            var sql = "CREATE TABLE IF NOT EXISTS scores (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), score INT)";
            connection.query(sql, function (err, result) {
                if (err) throw err;
                console.log("Table scores created");

                connection.end();
            });
        });
    });
}

