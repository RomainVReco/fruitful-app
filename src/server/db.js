import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const PORT = 8081

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    port: "3306",
    host: "localhost",
    user: "root",
    password: "",
    database: "fruitful"
})


// ************** UTILISATEUR ****************** //
/* Méthodes CRUD pour les utilisateurs */

app.get('/getAllUsers', (req, res) => {
    const sql = "SELECT * FROM utilisateur"
    db.query(sql, (err, result) => {
        if (err) return res.json({ Message: "Error in Node" })
        return res.json(result)
    })

})

app.post('/getUser/:id', (req, res) => {
    const idUtilisateur = req.params.id
    console.log('server : ', idUtilisateur)
    const sql = "SELECT idUtilisateur, nom, prenom, email, newsletter, specialOffer, idAdresse " +
        "FROM utilisateur WHERE idUtilisateur = ?;"
    db.query(sql, [idUtilisateur], (err, data) => {
        if (err) {
            return res.json('Erreur de requête SQL')
        }
        if (data.length > 0) {
            return res.json(data[0])
        } else {
            return res.json("Aucune information client trouvée")
        }
    })
})

app.post('/login', (req, res) => {
    const sql = "SELECT idUtilisateur FROM utilisateur WHERE " +
        "email = ?  AND password = ?"
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            console.log('login error : ', err)
            return res.status(500).json('Erreur de la tentative de login : ' + err)
        }
        if (data.length > 0) {
            return res.json(data[0])
        } else {
            return res.json("Identifiant ou mot de passe incorrect")
        }
    })
})

app.put('/updateClient', (req, res) => {
    const sql = "UPDATE utilisateur SET nom = ?, prenom = ?, email = ?, newsletter = ?, specialOffer = ? WHERE idUtilisateur = ? ;"
    db.query(sql, [req.body.nom, req.body.prenom, req.body.email, req.body.newsletter, req.body.specialOffer, req.body.idUtilisateur], (err, data) => {
        if (err) {
            console.log("Echec de l'exécution de la requête de mise à jours des informations clients : ", err)
            return res.status(500).json("Echec de l'exécution de la requête de mise à jours des informations clients : " + err)
        }
        if (data.affectedRows > 0) {
            console.log("Informations clients mises à jour avec succès.");
            return res.status(200).json({ success: "Informations clients mises à jour avec succès.", data: data });
        } else {
            console.log("Aucun client trouvé avec l'ID spécifié.");
            return res.status(404).json({ error: "Aucun client trouvé avec l'ID spécifié." });
        }

    })
})

app.put('/updateClient', (req, res) => {
    const sql = "UPDATE utilisateur SET nom = ?, prenom = ?, email = ?, newsletter = ?, specialOffer = ? WHERE idUtilisateur = ? ;"
    db.query(sql, [req.body.nom, req.body.prenom, req.body.email, req.body.newsletter, req.body.specialOffer, req.body.idUtilisateur], (err, data) => {
        if (err) {
            console.log("Echec de l'exécution de la requête de mise à jours des informations clients : ", err)
            return res.status(500).json("Echec de l'exécution de la requête de mise à jours des informations clients : " + err)
        }
        if (data.affectedRows > 0) {
            console.log("Informations clients mises à jour avec succès.");
            return res.status(200).json({ success: "Informations clients mises à jour avec succès.", data: data });
        } else {
            console.log("Aucun client trouvé avec l'ID spécifié.");
            return res.status(404).json({ error: "Aucun client trouvé avec l'ID spécifié." });
        }
    })

})

app.get('/getIsAbonne/:jeton', (req, res) => {
    const idUtilisateur = req.params.jeton
    console.log('getIsAbonne - id : ', idUtilisateur)
    const sql = "SELECT estAbonne FROM utilisateur WHERE idUtilisateur = ?;"
    db.query(sql, [idUtilisateur], (err, data) => {
        if (err) {
            console.log("Echec de la récupération du statut abonné : ", err)
            return res.status(500).json("Echec de la récupération du statut abonné : " + err)
        }
        if (data.length > 0) {
            console.log("Statut d'abonnement utilisateur trouvé");
            return res.status(200).json({ success: "Statut d'abonnement utilisateur trouvé.", data: data });
        } else {
            console.log("Statut abonné introuvable.");
            return res.status(404).json({ error: "Statut abonné introuvable." });
        }
    })
})


// ************** SOUSCRIPTION ****************** //
/* Méthodes pour souscription (abonnement Premium) */

app.post('/updateSubscription/:id', (req, res) => {
    const idUtilisateur = req.params.id;

    const nouvelEtatAbonne = req.body.estAbonne; // Nouvel état abonné à mettre à jour
    console.log('Nouvel Etat Abonné : ' + nouvelEtatAbonne);
    const sql = "UPDATE utilisateur SET estAbonne = ? WHERE idUtilisateur = ?";
    db.query(sql, [nouvelEtatAbonne, idUtilisateur], (err, result) => {
        if (err) {
            return res.json('Erreur lors de la mise à jour du statut abonné: ' + err);
        }
        return res.json('Mise à jour du status abonné réalisée avec succès');
    });
});

// ************** ADRESSE ****************** //
/* Méthode CRUD pour l'adresse */

app.post('/getAddress/:id', (req, res) => {
    const idUtilisateur = req.params.id
    console.log('server : ', idUtilisateur)
    const sql = "SELECT idAdresse, adresse, codePostal, idUtilisateur, ville FROM adresse WHERE idUtilisateur = ?"
    db.query(sql, [idUtilisateur], (err, data) => {
        if (err) {
            return res.json('Erreur de requête SQL')
        }
        if (data.length > 0) {
            return res.json(data[0])
        } else {
            return res.json("Aucune adresse trouvée")
        }
    })
})

app.post('/createAddress', (req, res) => {
    const { adresse, codePostal, ville, idUtilisateur } = req.body;
    const sql = "INSERT INTO adresse (adresse, codePostal, ville, idUtilisateur) VALUES (?, ?, ?, ?);"
    console.log("type data : ", typeof (req.body.adresse))
    db.query(sql, [adresse, codePostal, ville, idUtilisateur], (err, data) => {
        if (err) {
            console.log("Erreur lors de l'exécution de la requête de création d'adresse :", err)
            return res.status(500).json({ error: "Erreur lors de l'exécution de la requête de création d'adresse", detail: err })
        }
        if (data.affectedRows > 0) {
            const idAdresse = data.insertId;
            console.log("Id créé : ", idAdresse)
            const utilisateurSql = "UPDATE utilisateur SET idAdresse = ? WHERE idUtilisateur = ?;"
            db.query(utilisateurSql, [idAdresse, idUtilisateur], (utilisateurErr, utilisateurResult) => {
                if (utilisateurErr) {
                    console.log("Error updating utilisateur table:", utilisateurErr);
                    return res.status(500).json({ error: "Error updating utilisateur table", details: utilisateurErr });
                }
                else {
                    return res.json("Comportement inattendu lors de la création de la nouvelle adresse")
                }
            })
        }
    })
})

app.put('/updateAddress', (req, res) => {
    console.log("updateAddress")
    console.log("type adresse : ", typeof (req.body.adresse))
    console.log("type codePostal : ", typeof (req.body.codePostal))
    console.log("type ville : ", typeof (req.body.ville))
    console.log("type idAdresse : ", typeof (req.body.idAdresse))
    const sql = "UPDATE adresse SET adresse = ?, codePostal = ?, ville = ? WHERE idAdresse = ?"
    db.query(sql, [req.body.adresse, req.body.codePostal, req.body.ville, req.body.idAdresse], (err, data) => {
        if (err) {
            console.log("Erreur lors de l'exécution de la requête de mise à jour de l'adresse :", err);
            return res.status(500).json({ error: "Erreur lors de l'exécution de la requête de mise à jour de l'adresse.", details: err });
        }

        if (data && data.affectedRows > 0) {
            return res.status(200).json({ success: "Adresse mise à jour avec succès.", data: data });
        } else {
            console.log(res);
            return res.status(404).json({ error: "Aucune adresse trouvée avec l'ID spécifié." });
        }
    })
})


// ************** TÂCHES ****************** //
/* Méthodes pour la création de tâche */
app.get('/getAllEventTypes', (req, res) => {
    const sql = "SELECT nomTypeEvenement FROM type_evenement;"
    db.query(sql, (err, data) => {
        if (err) {
            return res.status(500).json({
                error: "Erreur lors de la récupération des types d'évènements.",
                details: err
            });
        }
        if (data && data.length > 0) {
            return res.status(200).json(data);
        } else {
            return res.status(404).json({ error: "Aucun type d'évènements trouvés en base." });
        }

    })

    app.get('/getAllIcons', (req, res) => {

        const sql = "SELECT nomIcone FROM icone;"
        db.query(sql, (err, data) => {

            if (err) {
                return res.status(500).json({
                    error: "Erreur lors de la récupération des icones",
                    details: err
                })
            }

            if (data && data.length > 0) {
                return res.status(200).json(data)

            } else {
                return res.status(404).json({ error: "Aucune icone trouvée en base de données." })
            }
        })
    })

})


app.post('/createNewEvent', (req, res) => {
    const { nom, dateDebut, frequence, typeEvenement, idUtilisateur, logo } = req.body
    const sql = "INSERT INTO evenement (nomEvenement, dateDebut, frequence, idTypeEvenement, idUtilisateur, idIcone) " +
        "VALUES (?, ?, ?, ?, ?, ?);"
    db.query(sql, [nom, dateDebut, frequence, typeEvenement, idUtilisateur, logo], (err, data) => {
        if (err) {
            return res.status(500).json({
                error: "Erreur lors de la création d'une nouvelle tâche",
                details: err
            })
        }
        if (data && data.affectedRows > 0) {
            return res.status(200).json({ success: "Nouvel évènement créé avec succès.", resultat: data })
        } else {
            return res.status(404).json({ failure: "Statut de création de la nouvelle tâche inconnue", info: err })
        }
    })
})

app.put('/updateEventStatus/:idEvenement', (req, res) => {
    const idEvenement = req.params.idEvenement
    const estActif = 0
    console.log('updateEventStatus idEvenement : ', idEvenement)
    console.log('updateEventStatus estActif : ', estActif)

    const sql = "UPDATE evenement SET estActif = ? WHERE idEvenement = ?;"
    db.query(sql, [estActif, idEvenement], (err, data) => {
        if (err) {
            return res.status(500).json({
                error: "Erreur lors de la désactivation d'un évènement",
                details: err
            })
        }
        if (data && data.affectedRows > 0) {
            return res.status(200).json({ success: `Evenement ${idEvenement} désactivé avec succès`, resultat: data })
        } else {
            return res.status(404).json({ failure: `Evenement ${idEvenement} introuvable en BDD`, resultat: data })
        }

    })
})

app.put('/updateEvent', (req, res) => {
    const { idEvenement, nom, dateDebut, frequence, typeEvenement, logo } = req.body
    console.log("updateEvent : ", idEvenement, nom, dateDebut, frequence, typeEvenement, logo)
    const sql = "UPDATE evenement SET nomEvenement = ?, dateDebut = ?, frequence = ?, " +
        "idTypeEvenement = ?, idIcone = ? WHERE idEvenement = ?;"
    db.query(sql, [nom, dateDebut, frequence, typeEvenement, logo, idEvenement], (err, data) => {
        if (err) {
            return res.status(500).json({
                error: "Erreur lors de la mise à jour d'un évènement",
                details: err
            })
        }
        if (data && data.affectedRows > 0) {
            return res.status(200).json({ success: `Evenement ${idEvenement} mis à jour avec succès`, resultat: data })
        } else {
            return res.status(404).json({ failure: `Evenement ${idEvenement} introuvable en BDD`, resultat: data })
        }
    })
})


app.get('/getAllUserEvents/:idUtilisateur', (req, res) => {
    const idUtilisateur = req.params.idUtilisateur
    console.log("getAllUserEvents : ", idUtilisateur)
    const sql = "SELECT idEvenement, nomEvenement, dateDebut, frequence, eve.idTypeEvenement, t_e.nomTypeEvenement, idIcone " +
        "FROM evenement as eve INNER JOIN type_evenement as t_e ON eve.idTypeEvenement = t_e.idTypeEvenement " +
        "WHERE eve.idUtilisateur = ? AND eve.estActif = 1;"
    db.query(sql, [idUtilisateur], (err, data) => {
        if (err) {
            return res.status(500).json({
                error: "Erreur lors de la récupération des évènements du client",
                details: err
            })
        }
        if (data && data.length > 0) {
            return res.status(200).json({ success: "Liste des évènements récupérés", resultat: data })
        } else {
            return res.status(404).json({ failure: "Aucun évènement trouvé pour ce client", resultat: data })
        }
    })
})

app.get('/getEvent/:idEvenement', (req, res) => {
    const idEvenement = req.params.idEvenement
    console.log('getEvent idEvenement : ', idEvenement)
    const sql = "SELECT idEvenement, nomEvenement as nom, dateDebut, frequence, idTypeEvenement as typeEvenement, idUtilisateur, " +
        "idIcone as logo FROM evenement WHERE idEvenement = ?;"
    db.query(sql, [idEvenement], (err, data) => {
        if (err) {
            return res.status(500).json({
                error: "Erreur lors de la récupération de l'évènement à modifier",
                details: err
            })
        }
        if (data && data.length > 0) {
            return res.status(200).json({ success: `Evenement ${idEvenement} récupéré avec succès`, resultat: data })
        } else {
            return res.status(404).json({ failure: "Aucun évènement trouvé", resultat: data })
        }
    })
})

app.get('/getEventUserCount/:jeton', (req, res) => {
    const idUtilisateur = req.params.jeton
    console.log('getEventUserCount jeton : ', idUtilisateur)
    const sql = "SELECT COUNT(idUtilisateur) as numEvents FROM evenement WHERE idUtilisateur = ? ;"
    db.query(sql, [idUtilisateur], (err, data) => {
        if (err) {
            return res.status(500).json({
                error: "Erreur lors de la récupération du nombre d'évènements de l'utilisateur",
                details: err
            })
        }
        if (data && data.length > 0) {
            return res.status(200).json({ success: `Nombre d'évènements récupéré avec succès`, resultat: data })
        } else {
            return res.status(404).json({ failure: "Aucun évènement trouvé", resultat: data })
        }
    })
    })


app.listen(PORT, () => {
    console.log("Connected to the server")
})

// ************** INSCRIPTION ****************** //
/* Méthodes CRUD pour l'inscription */

// Vérification si l'e-mail existe en BDD ou pas
app.post('/checkEmail', (req, res) => {

    const email = req.body.email
    console.log('server : ', email)
    const sql = "SELECT idUtilisateur FROM utilisateur WHERE email = ?"
    db.query(sql, [email], (error, data) => {
        if (error) {
            console.log("err : ", error);
        }
        console.log("data.length > 0 ", data.length > 0)
        if (data.length > 0) {
            console.log("data >0: ", data)
            return res.status(200).json({ success: `success`, resultat: data })
        } else {
            console.log("data=0 : ", data)
            return res.json({ success: `echec`, resultat: data })
        }
    })

})

// On écrit en base les renseignements fournis lors des 3 pages d'inscription.
app.put('/enregistrementInscription', (req, res) => {
    const { nom, prenom, dateNaissance, email, password } = req.body
    const sql = "INSERT INTO utilisateur (nom, prenom, dateNaissance, email, password) VALUES (?, ?, ?, ?, ?);"
    db.query(sql, [nom, prenom, dateNaissance, email, password], (err, data) => {
        if (err) {
            return res.status(500).json({
                error: "Erreur lors de l'enregistrement d'un nouvel utilisateur.",
                details: err
            })
        }
        if (data && data.affectedRows > 0) {
            return res.status(200).json({ success: `Utilisateur ${nom} ajouté à la base avec succès`, resultat: data })
        } else {
            return res.json({ failure: `Utilisateur ${nom} non ajouté à la base`, resultat: data })
        }
    })
})
