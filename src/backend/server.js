import express, { json } from 'express';
import cors from 'cors';

const app = express();
const  PORT = 3002;
app.use(cors());
app.use(json())

app.get('/', (req, res) => {
    return res.json("From backend side")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})