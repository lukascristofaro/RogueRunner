import { connection } from "./getConnection.js";

export function getAllUsers() {
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        connection.query("SELECT * FROM users", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    })
    return result;
}
