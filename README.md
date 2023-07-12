# projet-collectif---vente-de-meubles-vintage_project
projet-collectif---vente-de-meubles-vintage_project created by GitHub Classroom
![image](https://github.com/justinelambert12/projet-collectif---vente-de-meubles-vintage_project/assets/123973667/9e7ecc4a-4a5e-4c88-9ee3-b3257a32de96)


## Présentation du projet
**Objectif : Créer un site de vente de meubles vintage en 8 jours**<br><br>
**Contexte** : Projet collectif dans le cadre de la formation à Ada Tech School pour travailler sur le back et le front d'un site<br><br>
**Stack :** Node.js, express, MySQL, React, tailwind, bootstrap<br><br>
**Membres de l'équipe (10) :** Coraline JADEAU, Thomas SAIAG, Léa CASSEGRAIN, Justine LAMBERT, Lucie GENDRON, Elodie GUAYROSO, Pierre JEZEQUEL, Djihane Hadjer BOUIZEM, Nathan LESCHAEVE, Jess-Amélie SOLA

**Fonctionnalités implémentées :**
- ✅ Une page permettant à l'utilisateur de se logger s'il est enregistré dans la base de données
- ✅ Un formulaire permettant de créer un nouvel utilisateur dans la base de données
- ✅ Enregistrer le mot de passe hashé dans la base de données
- ✅ Une page d'accueil avec les vignettes des meubles disponibles
- ✅ Une page produit accessible au clic de la vignette du meuble correspondant
- ✅ Une page administrateur permettant d'ajouter de nouveaux meubles, de modifier ou supprimer les existants
- ✅ Une page panier regroupant les articles sélectionnés par l'utilisateur avec calcul du montant et possibilité de modifier le panier
- ✅ Gestion du panier via le local storage 
- ✅ Code promotion qui peut être rentré sur le panier pour diminuer le montant

**Reste à implémenter :**
- [ ] Avoir une session utilisateur / ne pas pouvoir accéder aux pages sans être loggé
- [ ] Ne donner l'accès à la page admin qu'aux personnes ayant les droits
- [ ] Pouvoir trier les meubles par catégorie sur la page d'accueil
- [ ] Permettre à l'utilisateur de rajouter des meubles au site après validation de l'administrateur
- [ ] Nettoyer la base de données

## Installer le projet
### 1. Installer les dépendances
Lancer `npm install` à la racine du projet, dans le dossier "front" et dans le dossier "back"
### 2. Installer la base de données
Récupérer le fichier “database.sql” du dossier “/back/sql” et l'importer dans phpMyAdmin pour créer la base de données.
La base de données s'appelle “vente_meubles” et doit être créée avec au moins les tables “testmeubles” et “test_users”.
### 3. Configurer les fichiers .env
Les fichiers .env sont ignorés par git et donc doivent être recréés avec les bonnes informations dépendant de votre configuration.
#### A la racine du projet
Créer un fichier ".env" avec les informations pour se connecter à la base de données.<br>
Les variables PASSWORD, PORT_BDD et HOST dépendent des paramètres de votre serveur MySQL.<br>
La variable PORT est le port sur lequel le serveur va tourner (dans l'exemple, le port 3000).
Exemple :
```
PASSWORD='root'
PORT_BDD=3306
HOST='http://localhost'
PORT=3000
```
#### Dans le dossier front
Créer un fichier ".env" avec les informations suivantes :
```
VITE_PORT=3000
VITE_HOST='http://localhost'
```
L'important est que VITE_PORT=PORT<sub>env_racine</sub> et VITE_HOST=HOST<sub>env_racine</sub>

## Lancer le projet
Une fois tout configuré et installé, 3 étapes sont nécessaires pour lancer le projet.
### 1. Lancer le serveur MySQL pour que la base de données soit accessible
### 2. Lancer le serveur
- Ouvrir un terminal
- Se placer dans le dossier "back" du projet
- Lancer `nodemon`
```
nodemon
[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node serveur.js`
Listening on port 3000
Connecté à la base de données MySQL
```
_Pour redémarrer le serveur, taper `rs`. Pour arrêter le serveur, appuyer sur la touche "Q"_
### 3. Ouvrir le site web
- Ouvrir un nouveau terminal
- Se placer dans le dossier "front" du projet
- Lancer `npm run dev`
```
npm run dev
> front@0.0.0 dev
> vite


  VITE v4.3.9  ready in 1158 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```
- Appuyer sur la touche 'O' ou cliquer sur le lien dans le terminal pour ouvrir la page web<br>
_Pour arrêter l'application, dans le terminal presser "CTRL + C"_

## Aperçus du projet
![image](https://github.com/justinelambert12/projet-collectif---vente-de-meubles-vintage_project/assets/123973667/e379915f-d25c-4452-adfc-6556b9cdef5c)
![image](https://github.com/justinelambert12/projet-collectif---vente-de-meubles-vintage_project/assets/123973667/66cd0dec-54a2-4e11-92e1-cb28b2eb1947)
![image](https://github.com/justinelambert12/projet-collectif---vente-de-meubles-vintage_project/assets/123973667/f4c51ac6-39ff-40a3-857f-aecac6f41e5c)
![image](https://github.com/justinelambert12/projet-collectif---vente-de-meubles-vintage_project/assets/123973667/b1259016-c63e-4220-9919-14b18a2a1c32)
![image](https://github.com/justinelambert12/projet-collectif---vente-de-meubles-vintage_project/assets/123973667/227136db-6afe-4c03-a572-a57609628374)




