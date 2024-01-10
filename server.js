const express = require('express');
const path = require('path'); // Module pour travailler avec les chemins de fichiers

const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.send('Bonjour, ceci est votre premier serveur web avec Node.js!');
});

app.use(express.static(path.join(__dirname, 'src')));

// Route pour la page d'accueil
app.get('/index', (req, res) => {
  // Utiliser sendFile pour envoyer le fichier HTML
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(port, () => {
    console.log(`Le serveur est en cours d'exécution sur http://localhost:${port}`);
});