import { connection } from "./getConnection.js";

export function addUser(email, username, password, nbGames, nbWins, money, experience) {
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO users (email, username, password, nbGames, nbWins, money, experience) VALUES ('" + email + "', '" + username + "', '" + password + "', " + nbGames + ", " + nbWins + ", " + money + ", " + experience + ")";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("user instert with success");
        });
    })
}