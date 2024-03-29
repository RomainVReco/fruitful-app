import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const PORT = 8081

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
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
    const idClient = req.params.id
    console.log('server : ', idClient)
    const sql = "SELECT idClient, nom, prenom, email, newsletter, specialOffer, idAdresse " +
        "FROM utilisateur WHERE idClient = ?;"
    db.query(sql, [idClient], (err, data) => {
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
    const sql = "SELECT idClient FROM utilisateur WHERE " +
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

app.post('/logintest1', (req, res) => {
    console.log("req.body :" + req.body.email)
    console.log("req.body :" + req.body.password)

    const sql = "SELECT s_nom FROM utilisateur WHERE " +
        "s_email= ?  AND s_mot_de_passe = ?"
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
    const sql = "UPDATE utilisateur SET nom = ?, prenom = ?, email = ?, newsletter = ?, specialOffer = ? WHERE idClient = ? ;"
    db.query(sql, [req.body.nom, req.body.prenom, req.body.email, req.body.newsletter, req.body.specialOffer, req.body.idClient], (err, data) => {
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

app.post('/updateTestUserName/:id', (req, res) => {
    const idClient = req.params.id;

    const nouvelEtatAbonne = req.body.estAbonne; // Nouvel état abonné à mettre à jour
    console.log('Nouvel Etat Abonné : ' + nouvelEtatAbonne);
    const sql = "UPDATE utilisateur SET estAbonne = ? WHERE idClient = ?";
    db.query(sql, [nouvelEtatAbonne, idClient], (err, result) => {
        if (err) {
            return res.json('Erreur lors de la mise à jour du statut abonné: ' + err);
        }
        return res.json('Mise à jour du status abonné réalisée avec succès');
    });

    /*const sql = "UPDATE utilisateur SET s_nom = ? WHERE i_id_utilisateur = ?";

    db.query(sql, [nouveauNom, idClient], (err, result) => {
        if (err) {
            return res.json('Erreur lors de la mise à jour du nom : ' + err);
        }
        return res.json('Nom utilisateur mis à jour avec succès');
    });
    */
});

// ************** ADRESSE ****************** //
/* Méthode CRUD pour l'adresse */

app.post('/getAddress/:id', (req, res) => {
    const idClient = req.params.id
    console.log('server : ', idClient)
    const sql = "SELECT idAdresse, adresse, codePostal, idClient, ville FROM adresse WHERE idClient = ?"
    db.query(sql, [idClient], (err, data) => {
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
    const { adresse, codePostal, ville, idClient } = req.body;
    const sql = "INSERT INTO adresse (adresse, codePostal, ville, idClient) VALUES (?, ?, ?, ?);"
    console.log("type data : ", typeof (req.body.adresse))
    db.query(sql, [adresse, codePostal, ville, idClient], (err, data) => {
        if (err) {
            console.log("Erreur lors de l'exécution de la requête de création d'adresse :", err)
            return res.status(500).json({ error: "Erreur lors de l'exécution de la requête de création d'adresse", detail: err })
        }
        if (data.affectedRows > 0) {
            const idAdresse = data.insertId;
            console.log("Id créé : ", idAdresse)
            const utilisateurSql = "UPDATE utilisateur SET idAdresse = ? WHERE idClient = ?;"
            db.query(utilisateurSql, [idAdresse, idClient], (utilisateurErr, utilisateurResult) => {
                if (utilisateurErr) {
                    console.log("Error updating utilisateur table:", utilisateurErr);
                    return res.status(500).json({ error: "Error updating utilisateur table", details: utilisateurErr });
                }
                return res.status(200).json({ success: "Nouvelle adresse créée en base de données", data: data, idAdresse: idAdresse })
            }
            )
        } else {
            return res.json("Comportement inattendu lors de la création de la nouvelle adresse")
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
app.get('/getAllEvenements', (req, res) => {
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


app.post('/createNewEvent', (req, res) => {
    const { nom, dateDebut, frequence, typeEvenement, idClient, logo } = req.body
    const sql = "INSERT INTO evenement (nomEvenement, dateDebut, frequence, idTypeEvenement, idClient, idIcone) " +
        "VALUES (?, ?, ?, ?, ?, ?);"
    db.query(sql, [nom, dateDebut, frequence, typeEvenement, idClient, logo], (err, data) => {
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
    console.log('idEvenement : ', idEvenement)
    console.log('estActif : ', estActif)

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
    console.log(idEvenement, nom, dateDebut, frequence, typeEvenement, logo)
    res.status(200).json("/updateEvent ==> ça marche buddy")
})


app.listen(PORT, () => {
    console.log("Connected to the server")
})

// ************** INSCRIPTION ****************** //
/* Méthodes CRUD pour l'inscription */



app.post('/checkEmail', (req, res) => {

    const email = req.body.email
    console.log('server : ', email)
    const sql = "SELECT COUNT(*) AS count FROM utilisateur WHERE email = ?"
    db.query(sql, [email], (error, data) => {
        if (error) {
            console.log("err : ", error);
            //     return res.status(500).json({error:"Erreur lors de la récupération des icones",
            // details:err})
            // }
            // if (data.length>0) {
            //     return res.status(200).json({ success:"Liste des icones récupérées", data:data})
            // } else {
            //     return res.status(404).json({error:"Aucune icone trouvée en base de données."})
            // }
            let a="err req SQL"+error;
            return res.json(a);
        }
        console.log("DATA :", data,)
        if (data.length > 0) {
            console.log("data : ", data)
            return res.json("ok")
        } else {
            console.log("data : ", data)
            return res.json("Aucune information client trouvée")
        }


    })
})
