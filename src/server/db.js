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
    console.log('server : ', idClient)
    
    const sql = "SELECT nom, prenom, email, newsletter, specialOffer FROM utilisateur WHERE idClient = ?"
    db.query(sql, [idClient], (err, data) => {
        if (err) { 
            return res.json('Erreur de connexion à la base')
        } 
        if (data.length > 0) {
            return res.json(data[0])
        } else {
            return res.json("Aucune information client trouvée")
        }
    })
})

app.post('/login', (req, res) => {
    console.log("req.body :"+req.body.email)
    console.log("req.body :"+req.body.password)

    const sql = "SELECT idClient FROM utilisateur WHERE "+
    "email = ?  AND password = ?"
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


app.listen(PORT, () => {
    console.log("Connected to the server")
})
