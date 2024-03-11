import { connection } from "./getConnection.js";

export function getAllUsers() {
    return new Promise((resolve, reject) => {
        connection.connect(function(err) {
            if (err) reject(err);
            console.log("Connected!");
            connection.query("SELECT * FROM users", function (err, result, fields) {
                if (err) reject(err);
                resolve(result);
            });
        });
    });
}

export function getUserById(id) {
    return new Promise((resolve, reject) => {
        connection.connect(function(err) {
            if (err) reject(err);
            console.log("Connected!");
            connection.query(`SELECT * FROM users WHERE id = ${id}`, function (err, result, fields) {
                if (err) reject(err);
                resolve(result);
            });
        });
    });
}

export function getUserByEmail(email) {
    return new Promise((resolve, reject) => {
        connection.connect(function(err) {
            if (err) reject(err);
            console.log("Connected!");
            connection.query(`SELECT * FROM users WHERE email = '${email}'`, function (err, result, fields) {
                if (err) reject(err);
                resolve(result[0]);
            });
        });
    });
}