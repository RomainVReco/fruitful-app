# FRUITFUL  

Fruiful est un site Web centré sur le bien-être et vise à aider les personnes à améliorer leur quotidien en leur permettant de définir leurs propres objectifs.    

Que ce soit pour se créer une nouvelle habitude, en perdre une mauvaise ou accomplir une tâche spécifique, Fruitful donne la main à ses utilisateurs pour réussir leur changement.   

Le développement du site, son interface et ses fonctionnalités ont d’abord été pensés dans une optique mobile first.   

Le projet a été réalisé en React.JS pour le frontend et Express.JS pour le backend. La base de données a été réalisée avec MySQL (MariaDB).  


## Contenu   

Afin d'accéder à l'application, il convient de cloner le repository dans un premier temp à l'aide de la commande `git clone` dans Git Bash ou de télécharger les fichiers compressés. 


### Mise en place de la base de données   

L'installation de la base de données est la première étape à effectuer pour faire tourner correctement le site.   

Une fois le dossier fruitful-app installé localement, la base de données fruitful.sql peut être récupérée dans le répertoire BDD. Elle doit être installée dans votre propre système de gestion de base de données. Le fichier contient l'ensemble des commandes nécessaires à la création de la base et de ses différentes tables, ainsi que quelques données de test.  

Si vous utilisez un système différent de MySQL, des ajustements peuvent être nécessaires. 

Assurez-vous que le serveur contenant la base de données est opérationnel.  


### Lancement du frontend   

Pour commencer à naviguer sur le site, il faut installer les dépendances du projet. A partir d'un terminal en ligne de commande, rendez-vous à la racine du projet ~/fruitful-app, puis utiliser la commande `npm install`.  

Une fois l'installation des librairies indispensables terminées, lancer le serveur de développement du front à l'aide de la commande `npm start`  


### Lancement du backend   

Via un terminal en ligne de commande, rendez-vous dans le répertoire "server" : ~/fruitful-app/src/server.  

Commencer par configurer la connexion à la base de données en modifiant les informations présentes dans le fichier db.js. En effet, par défaut le port du serveur backend est le 8081 et le port de la BDD est le 3036, tandis que le 'host' est configuré en localhost.  

A partir de cet emplacement, utiliser la commande `npm install` pour télécharger les dépendances nécessaires au fonctionnement du backend.   

Une fois fait, utiliser la commande `npm start` pour lancer le serveur.  


## Profit  
 
Le site web Fruitful est désormais opérationnel à 100 %.  

Pour signaler un bug ou proposer une évolution, utiliser le système d'issue de Github.  