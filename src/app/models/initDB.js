import { connection } from './getConnection.js';


export function initDB() {
    console.log("initDB");
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255), username VARCHAR(255) UNIQUE, password VARCHAR(255), nbGames INT, nbWins INT, money INT, experience FLOAT)";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Table users created");
        });

        var sql = "CREATE TABLE IF NOT EXISTS Items (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), price INT, type INT)";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Table Items created");

        });

        var sql = "CREATE TABLE IF NOT EXISTS maps (id INT AUTO_INCREMENT PRIMARY KEY, levelMap INT, difficulty INT, bestScore INT, bestPlayerID INT)";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Table maps created");

        });

        var sql = "CREATE TABLE IF NOT EXISTS rewards (id INT AUTO_INCREMENT PRIMARY KEY, userId INT, state BOOL, itemId INT, FOREIGN KEY (userId) REFERENCES users(id), FOREIGN KEY (itemId) REFERENCES Items(id))";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Table rewards created");

        });

        var sql = "CREATE TABLE IF NOT EXISTS Settings (id INT AUTO_INCREMENT PRIMARY KEY, userId INT, soundOn BOOL, musicOn BOOL, FOREIGN KEY (userId) REFERENCES users(id))";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Table Settings created");

        });

        var sql = "CREATE TABLE IF NOT EXISTS Inventory (id INT AUTO_INCREMENT PRIMARY KEY, userId INT, itemId INT, FOREIGN KEY (userId) REFERENCES users(id), FOREIGN KEY (itemId) REFERENCES Items(id))";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Table Inventory created");

        });

        var sql = "CREATE TABLE IF NOT EXISTS Image (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), image LONGBLOB, itemId INT, FOREIGN KEY (itemId) REFERENCES Items(id))";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Table Image created");

        });
        connection.end();
    });
}

initDB();