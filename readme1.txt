npm install express mongodb ejs
Création des fichiers :

Créez les fichiers suivants dans votre dossier de projet :
index.js : le fichier principal pour le serveur Node.js.
index.html : le fichier HTML pour l'interface utilisateur.
style.css : le fichier CSS pour styliser l'interface.
mongodb.js : le fichier contenant la configuration de la base de données MongoDB.
Configuration de la base de données :

Dans le fichier mongodb.js, faudra configurer la connexion à votre base de données MongoDB :

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017'; // URL de connexion MongoDB
const dbName = 'nom_de_la_base_de_donnees'; // Nom de la base de données

const connectDB = async () => {
  let client;
  try {
    client = await MongoClient.connect(url);
    console.log('Connexion à la base de données établie !');

    const db = client.db(dbName);
    return db;
  } catch (err) {
    console.error('Erreur de connexion à la base de données :', err);
    if (client) {
      client.close();
    }
    process.exit(1);
  }
};

module.exports = connectDB;

Configuration du serveur Node.js :

Dans le fichier index.js, faudra configurer le serveur Node.js et les routes nécessaires pour l'interface utilisateur : 

const express = require('express');
const connectDB = require('./mongodb');

const app = express();
const port = 3000; // Port du serveur

// Configuration de la base de données
const db = connectDB();

// Middleware pour parser les données POST
app.use(express.urlencoded({ extended: false }));

// Middleware pour servir les fichiers statiques
app.use(express.static('public'));

// Route pour afficher la page de connexion
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Route pour gérer la soumission du formulaire de connexion
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Vérifier les informations de connexion avec la base de données

  // Exemple de requête à la base de données
  db.collection('users')
    .findOne({ username: username, password: password })
    .then((result) => {
      if (result) {
        res.send('Connexion réussie !');
      } else {
        res.send('Identifiants incorrects');
      }
    })
             .catch((error) => {
           console.error('Erreur lors de la vérification des informations de connexion :', error);
           res.send('Erreur de connexion');
         });
     });

     // Démarrer le serveur
     app.listen(port, () => {
       console.log(`Serveur en écoute sur le port ${port}`);
     });
     ```

6. Création de l'interface utilisateur :
   - Dans le fichier `index.html`, vous pouvez créer un formulaire de connexion simple. Voici un exemple :

```html
<!DOCTYPE html>
<html>
<head>
  <title>Connexion</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Connexion</h1>
    <form action="/login" method="POST">
      <div class="form-group">
        <label for="username">Nom d'utilisateur</label>
        <input type="text" id="username" name="username" required>
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" name="password" required>
      </div>
      <button type="submit">Se connecter</button>
    </form>
  </div>
</body>
</html>

et bien sur um peu de css : .container {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 20px;
  background-color: #4A4E69;
  color: #F2E9E4;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #3A3E59;
}

puis on exécute le serveur avec la commande node index.js 

#Création de la base de donnée : 


