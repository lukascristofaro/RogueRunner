import bcrypt from 'bcrypt';

export async function hashPassword(password) {
    const saltRounds = 10;
    try {
        const hashedPassword = bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (err) {
        console.error("Error hashing password: ", err);
        return null;
    }
}