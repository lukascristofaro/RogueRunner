import express from "express";
import { join } from "path";
import { fileURLToPath } from "url";
import { addUser } from './app/models/injection.js';
import { readdir } from "fs";


const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "../");

const pathToViews = join(__dirname, "app/views");

const app = express();
const port = 8080;

const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Bonjour, ceci est votre premier serveur web avec Node.js!");
});

app.get("/game", (req, res) => {
  res.sendFile(join(pathToViews, "game.html"));
});
app.get("/home", (req, res) => {
  res.sendFile(join(pathToViews, "home.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(join(pathToViews, "login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(join(pathToViews, "register.html"));
});

app.post('/adduser', async (req, res) => {
  const { email, username, password } = req.body;
  try {
      await addUser(email, username, password, 0, 0, 0, 0);
      res.redirect('/login');
  } catch (err) {
      res.status(500).send('An error occurred while adding the user');
  }
});

app.get("/user", (req, res) => {
  console.log(getAllUsers());
  res.send("user");
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(
    `Le serveur est en cours d'exécution sur http://localhost:${port}`
  );
});
