

export async function logout(req, res) {
    req.session.destroy((err) => {
        if (err) {
            res.status(500).send("An error occurred while logging out");
        } else {
            res.redirect("/login");
        }
    });
}