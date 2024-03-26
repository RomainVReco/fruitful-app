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
            return res.status(999).json({ error: "Erreur lors de l'exécution de la requête de création d'adresse", detail: err })
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
                return res.status(200).json({ success: "Nouvelle adresse créée en base de données", data: data, idAdresse:idAdresse })
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

        if (data.affectedRows > 0) {
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
    const sql = "SELECT idTypeEvenement, nomTypeEvenement FROM type_evenement;"
    db.query(sql, (err, data) => {
        if (err) {
            console.log("Erreur lors de la récupération des typdes d'évènements", err);
            return res.status(500).json({ error: "Erreur lors de l'exécution de la requête de mise à jour de l'adresse.", details: err });
        }

        if (data.length > 0) {
            return res.status(200).json({ success: "Adresse mise à jour avec succès.", data: data });
        } else {
            console.log(res);
            return res.status(404).json({ error: "Aucune adresse trouvée avec l'ID spécifié." });
        }
    })
    })
})

app.listen(PORT, () => {
    console.log("Connected to the server")
})
