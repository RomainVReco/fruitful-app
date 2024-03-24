import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const PORT = 8081

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:"fruitful"
})

// ************** UTILISATEUR ****************** //
/* Méthodes CRUD pour les utilisateurs */

app.get('/getAllUsers', (req, res) => {
    const sql = "SELECT * FROM utilisateur"
    db.query(sql, (err, result) => {
        if (err) return res.json({Message:"Error in Node"})
        return res.json(result)
    })
})

app.post('/getUser/:id', (req, res) => {
    const idClient = req.params.id
    console.log('server : ', idClient)
    const sql = "SELECT nom, prenom, email, u.idAdresse, newsletter, specialOffer FROM utilisateur as u "+
    " INNER JOIN adresse as a ON u.idAdresse = a.idAdresse WHERE idClient = ?"
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
    const sql = "SELECT idClient FROM utilisateur WHERE "+
    "email = ?  AND password = ?"
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            console.log('login error : ', err)
            return res.json('Erreur de la tentative de login : '+err)
        }
        if (data.length > 0) {
            return res.json(data[0])
        } else {
            return res.json("Identifiant ou mot de passe incorrect")
        }
    })
})

app.put('/updateClient', (req, res) => {
    const sql = "UPDATE utilisateur SET nom = ?, prenom = ?, email = ?, newsletter = ?, specialOffer = ?;"
    db.query(sql, [req.body.nom, req.body.prenom, req.body.email, req.body.newsletter, req.body.specialOffer], (err, data) => {
        if (err) {
            console.log("Echec de l'exécution de la requête de mise à jours des informations clients : ", err)
            return res.json("Echec de l'exécution de la requête de mise à jours des informations clients : "+err)
        }
        if (data.length > 0) {
            return res.json(data)
        } else {
            return res.json("Comportement inattendu")
        }
    })

})


// ************** ADRESSE ****************** //
/* Méthode CRUD pour l'adresse */

app.post('/getAddress/:id', (req, res) => {
    const idAdresse = req.params.id
    console.log('server : ', idAdresse)
    const sql = "SELECT idAdresse, adresse, codePostal, ville FROM adresse WHERE idAdresse = ?"
    db.query(sql, [idAdresse], (err, data) => {
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
    const sql = "INSERT INTO adresse (adresse, codePostal, ville) VALUES (?, ?, ?)"
    db.query(sql, [req.body.adresse, req.body.codePostal, req.body.ville], (err, data) => {
        if (err) {
            console.log("Erreur lors de l'exécution de la requête de création d'adresse :", err)
            return res.json("Erreur lors de l'exécution de la requête de création d'adresse :", err)
        }
        if (data.affectedRows > 0) {
            return res.json(data)
        } else {
            return res.json("Comportement inattendu lors de la création de la nouvelle adresse")
        }
    })
})

app.put('/updateAddress', (req, res) => {
    const sql = "UPDATE adresse SET adresse = ?, codePostal = ?, ville = ? WHERE idAdresse = ?"
    db.query(sql, [req.body.adresse, req.body.codePostal, req.body.ville, req.body.idAdresse], (err, data) => {
        if (err) {
            console.log("Erreur lors l'exécution de la requête de mise à jour de l'adresse :", err)
            return res.json("Erreur lors l'exécution de la requête de mise à jour de l'adresse :", err)
        }
        if (data.length > 0) {
            return res.json(data)
        } else {
            return res.json("Comportement inattendu lors de la mise à jour de la nouvelle adresse")
        }
    })
})



app.listen(PORT, () => {
    console.log("Connected to the server")
})
