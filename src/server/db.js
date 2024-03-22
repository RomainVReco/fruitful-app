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

app.get('/getAllUsers', (req, res) => {
    const sql = "SELECT * FROM utilisateur"
    db.query(sql, (err, result) => {
        if (err) return res.json({Message:"Error in Node"})
        return res.json(result)
    })
})

app.post('/getUser/:id', (req, res) => {
    const idClient = req.params.id
    
    const sql = "SELECT * FROM utilisateur WHERE i_id_utilisateur = ?"
    db.query(sql, [idClient], (err, data) => {
        if (err) {
            
        }
    })


} )

app.post('/login', (req, res) => {
    console.log("req.body :"+req.body.email)
    console.log("req.body :"+req.body.password)

    const sql = "SELECT i_id_utilisateur FROM utilisateur WHERE "+
    "s_email= ?  AND s_mot_de_passe = ?"
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json('Erreur de la tentative de login : '+err)
        }
        if (data.length > 0) {
            return res.json(data[0])
        } else {
            return res.json("Identifiant ou mot de passe incorrect")
        }
    })
})

app.post('/logintest1', (req, res) => {
    console.log("req.body :"+req.body.email)
    console.log("req.body :"+req.body.password)

    const sql = "SELECT s_nom FROM utilisateur WHERE "+
    "s_email= ?  AND s_mot_de_passe = ?"
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json('Erreur de la tentative de login : '+err)
        }
        if (data.length > 0) {
            return res.json(data[0])
        } else {
            return res.json("Identifiant ou mot de passe incorrect")
        }
    })
})

app.post('/updateTestUserName/:id', (req, res) => {
    const idClient = req.params.id;
    const nouveauNom = req.body.nouveauNom; // Nouveau nom à mettre à jour
    
    const sql = "UPDATE utilisateur SET s_nom = ? WHERE i_id_utilisateur = ?";
    db.query(sql, [nouveauNom, idClient], (err, result) => {
        if (err) {
            return res.json('Erreur lors de la mise à jour du nom : ' + err);
        }
        return res.json('Nom utilisateur mis à jour avec succès');
    });
});


app.listen(PORT, () => {
    console.log("Connected to the server")
})
