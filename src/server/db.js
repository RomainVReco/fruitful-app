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


app.listen(PORT, () => {
    console.log("Connected to the server")
})
