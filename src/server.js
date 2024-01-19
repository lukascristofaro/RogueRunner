import express from "express";
import { join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "../");

const pathToViews = join(__dirname, "app/views");

const app = express();
const port = 8080;

const router = express.Router();

app.get("/", (req, res) => {
  res.send("Bonjour, ceci est votre premier serveur web avec Node.js!");
});

app.get("/game", (req, res) => {
  res.sendFile(join(pathToViews, "index.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(join(pathToViews, "home.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(join(pathToViews, "login.html"));
});

app.get("/signin", (req, res) => {
  res.sendFile(join(pathToViews, "signin.html"));
});

app.get("/shop", (req, res) => {
  res.sendFile(join(pathToViews, "shop.html"));
});

app.get("/inventory", (req, res) => {
  res.sendFile(join(pathToViews, "inventory.html"));
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(
    `Le serveur est en cours d'exécution sur http://localhost:${port}`
  );
});
