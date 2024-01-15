const express = require('express');


const app = express();
const port = 8080;

const router = express.Router();

const path = __dirname + '/app/views/'

app.get('/', (req, res) => {
    res.send('Bonjour, ceci est votre premier serveur web avec Node.js!');
});

app.get('/admin', (req, res) => {
    res.sendFile(path + 'home.html');
});


app.listen(port, () => {
    console.log(`Le serveur est en cours d'exécution sur http://localhost:${port}`);
});