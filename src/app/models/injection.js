import { connection } from "./getConnection.js";
import { hashPassword } from "../controller/hashpassword.js";

export async function addUser(email, username, password, nbGames, nbWins, money, experience) {
    let hashedpassword = await hashPassword(password);
    connection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO users (email, username, password, nbGames, nbWins, money, experience) VALUES ('" + email + "', '" + username + "', '" + hashedpassword + "', " + nbGames + ", " + nbWins + ", " + money + ", " + experience + ")";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("user instert with success");
        });
    })
}