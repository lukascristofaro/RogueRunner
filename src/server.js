import express from "express";
import exphbs from 'express-handlebars';

import { join } from "path";
import { fileURLToPath } from "url";
import { addUser } from './app/models/injection.js';
import { getAllUsers } from './app/models/queries.js';
import { getUserById } from './app/models/queries.js';
import { login } from "./app/controller/login.js";
import session from 'express-session';
import { logout } from "./app/controller/logout.js";
import { delUser } from './app/models/injection.js'
import bcrypt from 'bcrypt';



const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "../");

const pathToViews = join(__dirname, "app/views");

const app = express();
const port = 8080;


const router = express.Router();

app.engine('handlebars', exphbs.engine({ defaultLayout: '' }));

app.set('view engine', 'handlebars');
app.set('views', './app/views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'uEdQkBWobxCIG25c3K6m9AHmfmEvhRuXF8ZhlaFK2c4wzuJPDzout7yQifXPEDzk',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Note: in production, set secure to true and use HTTPS
}));

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

app.post('/login', (req, res) => {
  login(req, res);
});

app.get('/logout', (req, res) => {
  logout(req, res);
});

app.get("/profile", async (req, res) => {
  try {
    if (req.session.user) {
      res.render("profile", { user: req.session.user });
    } else {
      res.redirect("/login");
    }

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.get('/user', async (req, res) => {
  try {
      const users = await getAllUsers();
      res.json(users);
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});


app.post('/deleteprofile', async (req, res) => {
  try {
    if (req.session && req.session.user) {
      if (await bcrypt.compare(req.body.password, req.session.user.password)) {
        await delUser(req.session.user.id);
        req.session.destroy();
      res.json({ message: 'User deleted' });
      } else {
        res.status(401).json({ message: 'Wrong password' });
      }
    } else {
      res.status(401).json({ message: 'Not logged in' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/inventory", async (req, res) => {
  res.render("inventory", { user: req.session.user });
});

app.use(express.static("public"));


app.listen(port, () => {
  console.log(
    `Le serveur est en cours d'exécution sur http://localhost:${port}`
  );
});
