import { getUserByEmail } from "../models/queries.js";
import bcrypt from 'bcrypt';

export async function login(req, res) {
    const { email, password } = req.body;
    let user = getUserByEmail(email);
    if (user) {
        try {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                req.session.user = user;
                res.redirect("/home");
            } else {
                res.send("Wrong password");
            }
        } catch (err) {
            console.error(err);
            res.status(500).send("An error occurred while checking the password");
        }
    } else {
        res.send("User not found");
    }
}